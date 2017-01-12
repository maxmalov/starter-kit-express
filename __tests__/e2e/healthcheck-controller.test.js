const application = require('../test-app');
const ResponseSchema = require('./healthcheck-schema.js');

test('return a valid response', () => application.get('/api/healthcheck')
  .expect(200)
  .then((res) => {
    expect(res.body).toBeJsonSchema(ResponseSchema);
  })
);
