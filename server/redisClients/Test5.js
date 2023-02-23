var redis = require("redis"),
  client = redis.createClient('5', '5');
  client.connect()
module.exports = client;