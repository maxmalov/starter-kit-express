# Starter Kit

[![Build Status](https://travis-ci.org/maxmalov/starter-kit-express.svg?branch=master)](https://travis-ci.org/maxmalov/starter-kit-express)[![dependencies](https://david-dm.org/maxmalov/starter-kit-express.png)](https://david-dm.org/maxmalov/starter-kit-express)[![devDependencies](https://david-dm.org/maxmalov/starter-kit-express/dev-status.png)](https://david-dm.org/maxmalov/starter-kit-express?type=dev)

### Commands

- `npm start` will start server at 3000 port
- `npm test` will run project tests

## API Concepts

### Controllers

Each endpoints controller should have a setup function, which is responsible for routing for such specific controller, for ex.

```js

// controllers/my-controller.js

function pong(req, res) {
  res.set({ 'Content-Type': 'text/plain' });
  res.end('pong');
}

module.exports = {
  
  pong,
  
  // draw all controller specific routes here
  setup(router) {
    router.get('/ping', pong)
  }
  
};

```
