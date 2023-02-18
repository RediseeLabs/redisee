var redis = require("redis"),
  client = redis.createClient(12, 21);
  client.connect()
module.exports = client;