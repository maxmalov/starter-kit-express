const Ajv = require('ajv');

const ajv = new Ajv();

module.exports = function validateSchema(schema, data) {
  return ajv.validate(schema, data);
};
