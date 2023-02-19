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

connectionRouter.delete('/', connectionMiddleware.disconnect, (req, res) => {
  res.status(200).json(`deleted ${req.body.redisName}`);
});

module.exports = connectionRouter;
