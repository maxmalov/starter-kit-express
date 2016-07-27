const path = require('path');
const nconf = require('nconf');
const nconfYaml = require('nconf-yaml');
const env = process.env.NODE_ENV;

const config = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: 'file',
    file: path.join(__dirname, '..', '..', 'config', `${env}.yml`),
    format: nconfYaml,
  },
});

config.argv()
  .env()
  .required([
    'NODE_ENV',
    'port',
    'session:secret',
    'cookie:secret',
  ]);

module.exports = config;
