const server = require('./src/services/server');
const logger = require('./src/services/logger');
const config = require('./src/services/config');

server.listen(config.get('port'), () => logger.info('Express serving now running.'));

