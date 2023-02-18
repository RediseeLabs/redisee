var redis = require("redis"),
  client = redis.createClient(12, 1);
  client.connect()
module.exports = client;