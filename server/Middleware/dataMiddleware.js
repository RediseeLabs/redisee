const info = require('redis-info');

module.exports = {
  /*  - middleware that will get the client from file in redisClients folder
      - ask for data to the Redis database, parse it, and only return the needed properties
      - all middleware below does the same thing, just with different data points
  */
  performance: (req, res, next) => {
    const { redisName } = req.params;
    const redisClient = require(`../redisClients/${redisName}.js`);
    let latency = 0;
    const start = performance.now();
    redisClient
      .info('stats')
      .then((res) => {
        const end = performance.now();
        latency = end - start;
        return info.parse(res);
      })
      .then((data) => {
        const performance = {};
        performance.latency = Number(latency);
        performance.iops = Number(data.instantaneous_ops_per_sec);
        performance.hitRate = {};
        performance.hitRate.keyspace_hits = Number(data.keyspace_hits);
        performance.hitRate.keyspace_misses = Number(data.keyspace_misses);
        if (performance.hitRate.keyspace_hits)
          performance.hitRate.ratio = Number(
            (data.keyspace_hits / data.keyspace_misses + data.keyspace_hits) *
              100
          );

        res.locals.performance = performance;
        return next();
      })
      .catch((err) => {
        next({
          log: 'error while fetching info of redis database in performance middleware',
          status: 500,
          message: {
            err: "can't fetch performance data on redis, make sure your redis is running",
          },
        });
      });
  },

  memory: (req, res, next) => {
    const { redisName } = req.params;
    const redisClient = require(`../redisClients/${redisName}.js`);
    redisClient
      .info()
      .then((res) => {
        return info.parse(res);
      })
      .then((data) => {
        const memory = {};
        memory.usedMemory = Number(data.used_memory);
        memory.memFragmentationRatio = Number(data.mem_fragmentation_ratio);
        memory.usedMemory = Number(data.used_memory);
        memory.memFragmentationRatio = Number(data.mem_fragmentation_ratio);
        //Evicted_keys is part of 'info stats' instead of memory
        memory.evictedKeys = Number(data.evicted_keys);
        memory.evictedKeys = Number(data.evicted_keys);
        res.locals.memory = memory;
        return next();
      })
      .catch((err) => {
        next({
          log: 'error while fetching info of redis database in memory middleware',
          status: 500,
          message: {
            err: "can't fetch memory data on redis, make sure your redis is running",
          },
        });
      });
  },
  basicActivity: (req, res, next) => {
    const { redisName } = req.params;
    const redisClient = require(`../redisClients/${redisName}.js`);
    redisClient
      .info()
      .then((res) => {
        return info.parse(res);
      })
      .then((data) => {
        const basicActivity = {};
        basicActivity.connected_clients = Number(data.connected_clients);
        basicActivity.connected_slaves = Number(data.connected_slaves)
          ? data.connected_slaves
          : 0;
        //keyspace is part of 'info keyspace' instead of clients
        basicActivity.keyspace = Number(
          data.keyspace_hits + data.keyspace_misses
        );
        res.locals.basicActivity = basicActivity;
        return next();
      })
      .catch((err) => {
        next({
          log: 'error while fetching info of redis database in basicActivities middleware',
          status: 500,
          message: {
            err: "can't fetch basic Activities data on redis, make sure your redis is running",
          },
        });
      });
  },
  persistence: (req, res, next) => {
    const { redisName } = req.params;
    const redisClient = require(`../redisClients/${redisName}.js`);
    redisClient
      .info('persistence')
      .then((res) => {
        return info.parse(res);
      })
      .then((data) => {
        const persistence = {};
        persistence.rlst = Number(data.rdb_last_save_time);
        persistence.rcslt = Number(data.rdb_changes_since_last_save);
        res.locals.persistence = persistence;
        return next();
      })
      .catch((err) => {
        next({
          log: 'error while fetching info of redis database in persistence middleware',
          status: 500,
          message: {
            err: "can't fetch persistence data on redis, make sure your redis is running",
          },
        });
      });
  },
  error: (req, res, next) => {
    const { redisName } = req.params;
    const redisClient = require(`../redisClients/${redisName}.js`);
    redisClient
      .info('stats')
      .then((res) => {
        return info.parse(res);
      })
      .then((data) => {
        const error = {};
        error.rejectedConnection = Number(data.rejected_connections);
        error.keyspaceMisses = Number(data.keyspace_misses);
        res.locals.error = error;
        console.log(error);
        return next();
      });
  },
};
