const validateSchema = require('./validate-schema');

const matchers = {

  toBeJsonSchema() {
    return {
      compare: validateSchema
    };
  }

};

jasmine.addMatchers(matchers);
