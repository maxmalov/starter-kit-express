const createHttpError = require('http-errors');
const serialize = require('./serialize-error');

test('serialize http errors', () => {
  const error = createHttpError(401, 'Some shit happen', { errors: 'foo' });
  const serialized = serialize(error);

  expect(serialized.status).toEqual(error.status);
  expect(serialized.message).toEqual(error.message);
  expect(serialized.errors).toEqual(error.errors);
});

test('serialize non http errors', () => {
  const error = new TypeError('Some shit happen');
  const serialized = serialize(error);

  expect(serialized.status).toEqual(500);
  expect(serialized.message).toEqual(error.message);
  expect(serialized.errors).toBeUndefined();
});
