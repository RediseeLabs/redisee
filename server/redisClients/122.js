var redis = require("redis"),
  client = redis.createClient(3, 3);
  client.connect()
module.exports = client;