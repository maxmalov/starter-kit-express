const test = require('ava');
const expect = require('../../helpers/expect');
const createTestApp = require('../../helpers/create-test-app');
const ResponseSchema = require('./_healthcheck-schema.js');
const healthcheckFeature = require('../../../src/features/healthcheck');

const application = createTestApp(healthcheckFeature);

test('return a valid response', () => {
  application.get('/healthcheck')
    .expect(200)
    .then(res => {
      expect(res.body).to.be.jsonSchema(ResponseSchema);
    });
});
