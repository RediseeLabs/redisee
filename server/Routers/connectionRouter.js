const express = require('express');
const connectionRouter = express.Router();
const connectionMiddleware = require('../Middleware/connectionMiddleware');

connectionRouter.post(
  '/',
  connectionMiddleware.connect,
  connectionMiddleware.getInstances,
  (req, res) => {
    res.status(200).json(res.locals.instancesArr);
  }
);

connectionRouter.get('/', connectionMiddleware.getInstances, (req, res) => {
  res.status(200).json(res.locals.instancesArr);
});

connectionRouter.delete(
  '/deleteOne/:redisName',
  connectionMiddleware.disconnectOne,
  (req, res) => {
    res.status(200).json();
  }
);

connectionRouter.delete(
  '/deleteMany',
  connectionMiddleware.disconnectMany,
  (req, res) => {
    res.status(200).json('deleted all instances');
  }
);

module.exports = connectionRouter;
