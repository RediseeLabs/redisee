const fs = require('fs');
const path = require('path');
const createFileContent = (host, port) => {
  return `var redis = require("redis"),
  client = redis.createClient(${port}, ${host});
  client.connect()
module.exports = client;`;
};
module.exports = {
  connect: (req, res, next) => {
    const { redisName, port, host } = req.body;
    //need to add logic to check if redis instance with passed-in port and host is available
    res.locals.redisName = redisName;

    console.log('hit connection router' + redisName);
    fs.writeFileSync(
      path.resolve(__dirname, `../redisClients/${redisName}.js`),
      createFileContent(host, port),
      function (err) {
        if (err) {
          next({
            log: 'error while creating file in connectionMiddleware',
            status: 500,
            message: { err },
          });
        }
      }
    );
    next();
  },
  getInstances: (req, res, next) => {
    fs.readdir(
      path.resolve(__dirname, '../redisClients'),
      { withFileTypes: false },
      (err, files) => {
        if (err) console.log(err);
        else {
          files = files.map((file) => file.slice(0, -3));
          res.locals.instancesArr = files;
          next();
        }
      }
    );
  },

  disconnect: (req, res, next) => {
    const { redisName } = req.body;
    fs.unlink(
      path.resolve(__dirname, `../redisClients/${redisName}.js`),
      function (err) {
        if (err) {
          next({
            log: 'error while deleting file in connectionMiddleware',
            status: 500,
            message: { err },
          });
        }
      }
    ),
      next();
  },
};
