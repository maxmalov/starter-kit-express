const app = require('../src/components/app');
const supertest = require('supertest');

module.exports = supertest(app);
