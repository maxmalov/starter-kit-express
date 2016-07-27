module.exports = (destination, opts) => {
  const Pretty = require('bunyan-prettystream'); // eslint-disable-line global-require

  const stream = new Pretty(opts);
  stream.pipe(destination);
  return stream;
};
