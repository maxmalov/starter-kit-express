const test = require('ava');
const expect = require('../helpers/expect');
const createHttpError = require('http-errors');
const serialize = require('../../src/utils/serialize-error');

test('serialize http errors', () => {
  const error = createHttpError(401, 'Some shit happen', { errors: 'foo' });
  const serialized = serialize(error);

  expect(serialized).to.have.properties({
    status: error.status,
    message: error.message,
    errors: error.errors,
  });
});

test('serialize non http errors', () => {
  const error = new TypeError('Some shit happen');
  const serialized = serialize(error);

  expect(serialized).to.have.properties({
    status: 500,
    message: error.message,
  });

  expect(serialized).to.have.property('errors').that.is.undefined;
});
