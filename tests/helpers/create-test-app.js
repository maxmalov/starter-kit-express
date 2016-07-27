const createApp = require('../../src/services/create-app');
const supertest = require('supertest-as-promised');

module.exports = feature => supertest.agent(createApp([feature]));
