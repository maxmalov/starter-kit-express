const test = require('ava');
const expect = require('../../helpers/expect');
const collectHealthcheck = require('../../../src/features/healthcheck/healthcheck-service');

test('return alive status', () => {
  expect(collectHealthcheck()).to.have.property('status', 'alive');
});
