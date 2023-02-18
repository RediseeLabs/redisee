var redis = require("redis"),
  client = redis.createClient(13, 13);
  client.connect()
module.exports = client;