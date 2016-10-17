const healthCheckController = require('./healthcheck-controller');

module.exports = (router) => {
  router.get('/healthcheck', healthCheckController);
};
