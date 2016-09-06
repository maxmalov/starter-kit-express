const expect = require('../../helpers/expect');
const collectHealthcheck = require('../../../src/features/healthcheck/healthcheck-service');

it('return alive status', () => {
  expect(collectHealthcheck()).to.have.property('status', 'alive');
});
