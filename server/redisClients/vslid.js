var redis = require("redis"),
  client = redis.createClient('6379', '127.0.01');
  client.connect()
module.exports = client;