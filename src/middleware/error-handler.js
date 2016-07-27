const createHttpError = require('http-errors');
const httpStatus = require('http-status');
const serializeError = require('../utils/serialize-error');
const logger = require('../services/logger').child({ component: 'Error Handler' });

const notFound = (req) => {
  throw createHttpError(httpStatus.NOT_FOUND, `Resource not found at path ${req.originalUrl}`);
};

const main = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

  if (status < 500) {
    logger.trace(err, 'Handling error');
  } else {
    logger.error(err, 'Handling error');
  }

  res.status(status).json({
    error: serializeError(err),
  });
};

module.exports = {
  notFound,
  main,
};
