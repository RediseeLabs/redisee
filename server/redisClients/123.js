var redis = require("redis"),
  client = redis.createClient(12, 12);
  client.connect()
module.exports = client;