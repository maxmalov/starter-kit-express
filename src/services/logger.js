const path = require('path');
const Logger = require('bunyan');
const _ = require('lodash/fp');
const mkdirp = require('mkdirp');
const config = require('./config');
const createPrettyLogStream = require('../utils/create-pretty-log-stream');
const pkg = require('../../package.json');

const streams = config.get('logger:streams') || [{
  level: 'debug',
  stream: createPrettyLogStream(process.stdout),
}];

const createLogPaths = _.flow([
  _.filter(stream => !!stream.path),
  _.uniq,
  _.map(stream => path.dirname(stream.path)),
  _.forEach(mkdirp.sync),
]);

createLogPaths(streams);

module.exports = Logger.createLogger({
  name: pkg.name,
  src: true,
  streams,
});
