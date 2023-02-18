var redis = require("redis"),
  client = redis.createClient(1, 1);
  client.connect()
module.exports = client;