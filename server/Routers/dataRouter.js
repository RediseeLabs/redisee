const express = require("express");
const dataRouter = express.Router();
const dataMiddleware = require("../Middleware/dataMiddleware");

/*  - serve all endpoints related to data */


dataRouter.get("/:redisName/performance", dataMiddleware.performance, (req, res) => {
  res.status(200).json(res.locals.performance);
});

dataRouter.get("/:redisName/memory", dataMiddleware.memory, (req, res) => {
  res.status(200).json(res.locals.memory);
});

dataRouter.get("/:redisName/basicActivity", dataMiddleware.basicActivity, (req, res) => {
  res.status(200).json(res.locals.basicActivity);
});

dataRouter.get("/:redisName/persistence", dataMiddleware.persistence, (req, res) => {
  res.status(200).json(res.locals.persistence);
});

dataRouter.get("/:redisName/error", dataMiddleware.error, (req, res) => {
  res.status(200).json(res.locals.error);
});

module.exports = dataRouter;
