const http = require('http');
const createApp = require('./create-app');
const features = require('../features');

const app = createApp(features, '/api');
const server = http.createServer(app);

module.exports = server;
module.exports.appInstance = app;
