const server = require('./src/components/server');
const logger = require('./src/components/create-logger')('HTTP Server');
const config = require('./src/components/config');

server.listen(config.get('port'), () => logger.info('Express serving now running.'));

