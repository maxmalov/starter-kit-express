const app = require('../src/components/app');
const supertest = require('supertest-as-promised');

module.exports = supertest.agent(app);
