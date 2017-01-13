const createHttpError = require('http-errors');
const httpStatus = require('http-status');
const devErrorHandler = require('errorhandler');
const serializeError = require('../utils/serialize-error');
const config = require('../components/config');
const logger = require('../components/create-logger')('Error Handler');

function notFound(req) {
  throw createHttpError(httpStatus.NOT_FOUND, `Resource not found at path ${req.originalUrl}`);
}

function productionHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  const status = err.status || err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

  if (status < 500) {
    logger.debug(err, 'Handling client error');
  } else {
    logger.error(err, 'Handling server error');
  }

  res.status(status).json(serializeError(err));
}

const devHandler = devErrorHandler({
  log(err, str, req) {
    logger.error({
      title: `Error in ${req.method} ${req.url}`,
      message: str
    });
  }
});

const main = config.get('NODE_ENV') === 'development' ? devHandler : productionHandler;

module.exports = {
  notFound,
  main
};
