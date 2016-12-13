const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const config = require('./config');
const errorHandler = require('../middleware/error-handler');

const app = express();

app.use(bodyParser.json());

app.use(config.get('apiRoot'), router);

app.use('/', errorHandler.notFound);
app.use(errorHandler.main);

module.exports = app;
