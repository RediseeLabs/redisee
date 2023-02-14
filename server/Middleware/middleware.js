const Redis = require("redis");
const info = require("redis-info");
const redisClient = Redis.createClient();
redisClient.connect();

module.exports = {
  performance: (req, res, next) => {
    // function testLatency() {
    //   const start = performance.now();
    //   redisClient.info().then((res) => {
    //     const end = performance.now();
    //     console.log(end - start);
    //   });
    // }
    // setInterval(testLatency, 10);
    let latency = 0;
    const start = performance.now();
    redisClient
      .info("stats")
      .then((res) => {
        const end = performance.now();
        latency = end - start;
        return info.parse(res);
      })
      .then((data) => {
        const performance = {};
        performance.latency = latency;
        performance.iops = data.instantaneous_ops_per_sec;
        performance.hitRate = {};
        performance.hitRate.keyspace_hits = data.keyspace_hits;
        performance.hitRate.keyspace_misses = data.keyspace_misses;
        performance.hitRate.ratio =
          (data.keyspace_hits / data.keyspace_misses + data.keyspace_hits) *
          100;
        performance.hitRate.ratio = performance.hitRate.ratio
          ? performance.hitRate.ratio
          : 0;
        res.locals.performance = performance;
        return next();
      });
  },

  memory: (req, res, next) => {
    redisClient
      .info()
      .then((res) => {
        return info.parse(res);
      })
      .then((data) => {
        const memory = {};
        memory.usedMemory = Number(data.used_memory);
        memory.memFragmentationRatio = Number(data.mem_fragmentation_ratio);
        //Evicted_keys is part of 'info stats' instead of memory
        memory.evictedKeys = Number(data.evicted_keys);
        res.locals.memory = memory;
        return next();
      });
  },
  basicActivity: (req, res, next) => {
    redisClient
      .info()
      .then((res) => {
        return info.parse(res);
      })
      .then((data) => {
        const basicActivity = {};
        basicActivity.connectedClients = data.connected_clients;
        basicActivity.connectedSlaves = data.connected_slaves
          ? data.connected_slaves
          : 0;
        //keyspace is part of 'info keyspace' instead of clients
        basicActivity.keyspaces = data.keyspace_hits + data.keyspace_misses;
        res.locals.basicActivity = basicActivity;
        return next();
      });
  },
  persistence: (req, res, next) => {
    redisClient
      .info("persistence")
      .then((res) => {
        return info.parse(res);
      })
      .then((data) => {
        const persistence = {};
        persistence.rlst = data.rdb_last_save_time;
        persistence.rcslt = data.rdb_changes_since_last_save;
        res.locals.persistence = persistence;
        return next();
      });
  },
  error: (req, res, next) => {
    redisClient
      .info("stats")
      .then((res) => {
        return info.parse(res);
      })
      .then((data) => {
        const error = {};
        error.rejectedConnection = data.rejected_connections;
        error.keyspaceMisses = data.keyspace_misses;
        console.log("keyspaceMisses", keyspaceMisses);
        res.locals.error = error;
        return next();
      });
  },
};
