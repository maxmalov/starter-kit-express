const collectHealthcheck = require('./healthcheck-service');

test('return alive status', () => {
  const healthcheck = collectHealthcheck();

  expect(healthcheck.status).toEqual('alive');
});
