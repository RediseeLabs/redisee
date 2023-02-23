var redis = require("redis"),
  client = redis.createClient('4', '4');
  client.connect()
module.exports = client;