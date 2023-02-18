var redis = require("redis"),
  client = redis.createClient('112', '12');
  client.connect()
module.exports = client;