const application = require('../test-app');
const validateSchema = require('../validate-schema');
const ResponseSchema = require('./healthcheck-schema.js');

test('return a valid response', () => application.get('/api/healthcheck')
  .expect(200)
  .then((res) => {
    expect(validateSchema(ResponseSchema, res.body)).toEqual(true);
  })
);
