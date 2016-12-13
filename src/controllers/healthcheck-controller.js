const collectHealthCheck = require('../bl/healthcheck-service');

function getHealthCheck(req, res) {
  res.json(collectHealthCheck());
}

function setup(router) {
  router.get('/healthcheck', getHealthCheck);
}

module.exports = {
  getHealthCheck,
  setup
};
