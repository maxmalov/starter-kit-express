const path = require('path');
const Logger = require('bunyan');
const _ = require('lodash');
const mkdirp = require('mkdirp');
const Pretty = require('bunyan-prettystream');
const config = require('./config');
const pkg = require('../../package.json');

function createPrettyLogStream(destination, opts) {
  const stream = new Pretty(opts);
  stream.pipe(destination);
  return stream;
}

const streams = config.get('logger:streams') || [{
  level: 'debug',
  stream: createPrettyLogStream(process.stdout)
}];

// initialize lod directories
_(streams)
  .map(stream => stream.path)
  .filter(logPath => !!logPath)
  .uniq()
  .map(logPath => path.dirname(logPath))
  .forEach(mkdirp.sync);

module.exports = Logger.createLogger({
  name: pkg.name,
  src: true,
  streams
});
