var redis = require("redis"),
  client = redis.createClient(2, 2);
  client.connect()
module.exports = client;