const express = require("express");
const Router = express.Router();
const Redis = require("redis");
const info = require("redis-info");
const redisClient = Redis.createClient();
const RedisMiddleware = require("../Middleware/middleware");
redisClient.connect();

Router.get("/performance", RedisMiddleware.performance, (req, res) => {
  res.status(200).json(res.locals.performance);
});

Router.get("/memory", RedisMiddleware.memory, (req, res) => {
  res.status(200).json(res.locals.memory);
});

Router.get("/basicActivity", RedisMiddleware.basicActivity, (req, res) => {
  res.status(200).json(res.locals.basicActivity);
});

Router.get("/persistence", RedisMiddleware.persistence, (req, res) => {
  res.status(200).json(res.locals.persistence);
});

Router.get("/error", RedisMiddleware.error, (req, res) => {
  res.status(200).json(res.locals.error);
});

module.exports = Router;
