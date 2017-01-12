const Ajv = require('ajv');

const ajv = new Ajv();

function formatSuffix(err) {
  return err.dataPath ? `${err.dataPath}: ` : '';
}

function collectMessage(errors) {
  return errors.map(err => `${formatSuffix(err)}${err.message}`).join('\n');
}

module.exports = function validateSchema(actual, schema) {
  const result = ajv.validate(schema, actual);

  if (result === true) {
    return {
      pass: true
    };
  }

  const message = collectMessage(ajv.errors);
  ajv.errors = null;

  return {
    pass: false,
    message
  };
};
