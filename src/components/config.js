const path = require('path');
const nconf = require('nconf');

const env = process.env.NODE_ENV;

const config = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: 'file',
    file: path.join(__dirname, '..', '..', 'config', `${env}.json`)
  }
});

config.argv()
  .env()
  .required([
    'NODE_ENV',
    'port',
    'apiRoot'
  ]);

module.exports = config;
