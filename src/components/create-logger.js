const path = require('path');
const fs = require('fs');
const Logger = require('bunyan');
const _ = require('lodash');
const Pretty = require('bunyan-prettystream');
const config = require('./config');
const pkg = require('../../package.json');
const assert = require('assert');

function createPrettyLogStream(destination, opts) {
  const stream = new Pretty(opts);
  stream.pipe(destination);
  return stream;
}

const streams = config.get('logger:streams') || [{
  level: 'debug',
  stream: createPrettyLogStream(process.stdout)
}];

// ensure log directories
_(streams)
  .map(stream => stream.path)
  .filter(logPath => !!logPath)
  .uniq()
  .map(logPath => path.dirname(logPath))
  .forEach(logDir => assert(fs.existsSync(logDir) === true, `Cannot find log directory ${logDir}`));

const mainLogger = Logger.createLogger({
  name: pkg.name,
  src: true,
  streams
});

function createComponentLogger(component) {
  return mainLogger.child({ component });
}

module.exports = createComponentLogger;
module.exports.mainLogger = mainLogger;
