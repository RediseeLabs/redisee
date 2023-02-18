var redis = require("redis"),
  client = redis.createClient(122, 2121);
  client.connect()
module.exports = client;