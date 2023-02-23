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
  '/:redisName',
  connectionMiddleware.disconnect,
  (req, res) => {
    res.status(200).json();
  }
);

// connectionRouter.delete(
//   '/clearAll',
//   connectionMiddleware.disconnectAll,
//   (req, res) => {
//     res.status(200).json('deleted all instances');
//   }
// );

module.exports = connectionRouter;
