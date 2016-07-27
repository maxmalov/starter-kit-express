const collectHealthCheck = require('./healthcheck-service');

module.exports = (req, res) => res.json(collectHealthCheck());
