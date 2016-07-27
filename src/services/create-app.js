const express = require('express');
const createRouter = require('./create-router');
const cookie = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('./config');
const errorHandler = require('../middleware/error-handler');

module.exports = (features, featuresPath = '/') => {
  const app = express();

  app.use(cookie(config.get('cookie:secret')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(session({
    secret: config.get('session:secret'),
    saveUninitialized: true,
    resave: false,
  }));

  const router = createRouter(app, features);
  app.use(featuresPath, router);

  app.use('/', errorHandler.notFound);
  app.use(errorHandler.main);

  return app;
};
