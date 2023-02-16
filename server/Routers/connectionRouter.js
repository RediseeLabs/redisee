const express = require("express");
const connectionRouter = express.Router();
const connectionMiddleware = require('../Middleware/connectionMiddleware')

connectionRouter.post("/",connectionMiddleware.connect, (req, res) => {
  res.status(200).json(`connected to ${req.body.redisName}`);
});

connectionRouter.get("/", connectionMiddleware.getInstances, (req, res) => {
  res.status(200).json(res.locals.instancesArr);
})

connectionRouter.delete("/",connectionMiddleware.disconnect,(req, res) => {
  res.status(200).json(`deleted ${req.body.redisName}`);
});



module.exports = connectionRouter;
