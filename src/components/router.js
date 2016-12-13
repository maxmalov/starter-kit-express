const path = require('path');
const _ = require('lodash');
const createRouter = require('express').Router;

const router = createRouter();

const controllers = require('require-all')({
  dirname: path.join(__dirname, '..', 'controllers'),
  filter: /^(.+-controller)\.js$/
});

_.forOwn(controllers, (ctrl) => {
  if (_.isFunction(ctrl.setup)) {
    ctrl.setup(router);
  }
});

// call setup on each controller

module.exports = router;
