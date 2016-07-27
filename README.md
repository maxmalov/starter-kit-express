# Starter Kit

[![Build Status](https://travis-ci.org/maxmalov/starter-kit-express.svg?branch=master)](https://travis-ci.org/maxmalov/starter-kit-express)[![dependencies](https://david-dm.org/maxmalov/starter-kit-express.png)](https://david-dm.org/maxmalov/starter-kit-express)[![devDependencies](https://david-dm.org/maxmalov/starter-kit-express/dev-status.png)](https://david-dm.org/maxmalov/starter-kit-express#info=devDependencies)

### Commands

- `npm start` will start server at 3000 port
- `npm test` will test the shit out

## API Concepts

### Features

All business logic should be extracted into independent feature modules. Feature module usually include list of services, models, request controllers and mainly install function. This function should be placed in the feature root folder and it is responsible for feature injection in an application server (setup routes, middlewares, etc). See `src/features/healthcheck` as example. By this approach each feature can be easily tested in an isolation: we just create sample express application, inject one feature and test it with superagent. See `tests/features/healthcheck` as test example.

