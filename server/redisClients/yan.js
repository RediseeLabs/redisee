var redis = require("redis"),
  client = redis.createClient(12, 132);
  client.connect()
module.exports = client;