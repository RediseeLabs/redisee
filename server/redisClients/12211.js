var redis = require("redis"),
  client = redis.createClient(11, 1);
  client.connect()
module.exports = client;