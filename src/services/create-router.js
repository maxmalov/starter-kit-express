const createRouter = require('express').Router;

module.exports = (app, features) => {
  const router = createRouter();
  features.forEach(installFeature => installFeature(router, app));
  return router;
};
