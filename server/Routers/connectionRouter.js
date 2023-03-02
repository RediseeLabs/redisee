const express = require('express');
const connectionRouter = express.Router();
const connectionMiddleware = require('../Middleware/connectionMiddleware');

/*    - connection router handle all endpoints related to clients, such as delelete, add, and create */

connectionRouter.post(
  '/',
  connectionMiddleware.validate,
  connectionMiddleware.connect,
  (req, res) => {
    res.status(200).json('Successfully connected to redis database');
  }
);

connectionRouter.get('/', connectionMiddleware.getInstances, (req, res) => {
  res.status(200).json(res.locals.instancesArr);
});

connectionRouter.delete(
  '/deleteOne/:redisName',
  connectionMiddleware.disconnectOne,
  (req, res) => {
    res.status(200).json('Client successfully deleted');
  }
);

connectionRouter.delete(
  '/deleteMany',
  connectionMiddleware.disconnectMany,
  (req, res) => {
    res.status(200).json('All clients successfully deleted ');
  }
);

module.exports = connectionRouter;
