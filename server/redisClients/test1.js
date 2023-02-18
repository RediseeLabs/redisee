var redis = require("redis"),
  client = redis.createClient(123, 123);
  client.connect()
module.exports = client;