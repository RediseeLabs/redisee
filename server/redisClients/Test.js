var redis = require("redis"),
  client = redis.createClient(6379, 127.0.0.1);
  client.connect()
module.exports = client;