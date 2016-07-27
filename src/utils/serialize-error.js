const httpStatus = require('http-status');

module.exports = error => ({
  status: error.status || error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
  message: error.message,
  errors: error.errors,
});
