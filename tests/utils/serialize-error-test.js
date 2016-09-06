const expect = require('../helpers/expect');
const createHttpError = require('http-errors');
const serialize = require('../../src/utils/serialize-error');

it('serialize http errors', () => {
  const error = createHttpError(401, 'Some shit happen', { errors: 'foo' });
  const serialized = serialize(error);

  expect(serialized).to.have.property('status', error.status);
  expect(serialized).to.have.property('message', error.message);
  expect(serialized).to.have.property('errors', error.errors);
});

it('serialize non http errors', () => {
  const error = new TypeError('Some shit happen');
  const serialized = serialize(error);

  expect(serialized).to.have.property('status', 500);
  expect(serialized).to.have.property('message', error.message);
  expect(serialized).to.have.property('errors').that.is.undefined;
});
