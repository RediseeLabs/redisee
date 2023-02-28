const fs = require('fs');
const path = require('path');
const redis = require('redis');

/*    - helper function that returns the contents 
        for newly created file will be used to create client
      -  */

const createFileContent = (host, port) => {
  return `var redis = require("redis"),
  client = redis.createClient('${port}', '${host}');
  client.connect()
module.exports = client;`;
};

module.exports = {
  /*  - middleware that will check values from the form and send back an error message if it doesn't meet condition */
  validate: (req, res, next) => {
    const { host, port, redisName } = req.body;
    /*  - regEx that spots special character */
    const excludeRegex = /^[<>!@#\$%\^\&*\)\(+=._-]+$/g;
    /*  - regEx that selects numbers */
    const numberRegex = /[0-9]/g;

    let error = {
      log: 'Error triggered in validate middleware',
      status: 400,
      message: {
        err: '',
      },
    };
    /*  - checking if field is empty */
    for (let key in req.body) {
      if (req.body[key].length <= 0) {
        return next({
          ...error,
          message: { err: `${key} must not be empty` },
        });
      }
    }
    if (typeof redisName !== 'string')
      return next({ ...error, message: { err: 'Name must not be a Number' } });
    /*  - check if Redis name input contain any special character */
    if (excludeRegex.test(redisName)) {
      return next({
        ...error,
        message: { err: 'Name must no contain any special character' },
      });
    }
    /*  - check if input port contains any character other than number  */
    if (!numberRegex.test(port))
      return next({
        ...error,
        message: { err: 'Port must contain only Numbers' },
      });
    if (redisName.length >= 15)
      return next({
        ...error,
        message: { err: 'name must be less than 15 characters' },
      });
    return next();
  },
  /*  - this middleware will take info from the form, create client, and connect it to Redis database */
  connect: async (req, res, next) => {
    const { redisName, port, host } = req.body;
    try {
      const Client = await redis.createClient({
        socket: {
          host: host,
          port: port,
        },
      });
      /*  - try to connect to database with form info */
      await Client.connect();
      /*  - if successfully connected, create a new JS file inside redisClients folder,
            that will contain the new client, thanks to the createFileContents helper function 
      */
      fs.writeFileSync(
        path.resolve(__dirname, `../redisClients/${redisName}.js`),
        createFileContent(host, port),
        function (err) {
          throw 'error while creating client';
        }
      );

      res.locals.redisName = redisName;
      next();
    } catch (err) {
      next({
        log: 'Error when validating redis instance in connection Middleware',
        status: 500,
        message: {
          err: 'error while connection to redis, please check port and host',
        },
      });
    }
  },
  /*  - middleware that gets all files stored in redisClients folder, and returns an array of client names */
  getInstances: (req, res, next) => {
    fs.readdir(
      path.resolve(__dirname, '../redisClients'),
      { withFileTypes: false },
      (err, files) => {
        if (err) {
          next({
            log: 'Error when reading all redis instances in getInstances Middleware',
            status: 500,
            message: {
              err: "couldn't fetch Clients please retry",
            },
          });
        } else {
          files = files.reduce((result, file) => {
            if (file !== '.gitkeep') {
              result.push(file.slice(0, -3));
            }
            return result;
          }, []);
          res.locals.instancesArr = files;
          next();
        }
      }
    );
  },
  /*  - middleware that will delete file (client) with info given from front-end */
  disconnectOne: async (req, res, next) => {
    const { redisName } = req.params;
    console.log(redisName);
    try {
      const redisClient = require(`../redisClients/${redisName}.js`);
      await fs.promises.unlink(
        path.resolve(__dirname, `../redisClients/${redisName}.js`)
      );
      await redisClient.disconnect();
    } catch (err) {
      return next({
        log: 'error while deleting file in connectionMiddleware',
        status: 500,
        message: {
          err: 'could not find redis client to delete, please retry',
        },
      });
    }
    next();
  },
  /*  - middleware that will delete all files */
  disconnectMany: (req, res, next) => {
    fs.readdir(path.resolve(__dirname, '../redisClients'), (err, files) => {
      if (err) {
        next({
          log: 'error while deleting all files in disconnectMany Middleware',
          status: 500,
          message: {
            err: 'could not find redis clients to delete, please retry',
          },
        });
      }
      for (let file of files) {
        fs.unlink(
          path.resolve(__dirname, `../redisClients/${file}`),
          function (err) {
            if (err) {
              next({
                log: 'error while deleting file in disconnectMany Middleware',
                status: 500,
                message: {
                  err: 'could not find redis clients to delete, please retry',
                },
              });
            }
          }
        );
      }
    });

    next();
  },
};
