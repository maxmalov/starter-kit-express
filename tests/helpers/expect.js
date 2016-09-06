const chai = require('chai');

chai.use(require('chai-as-promised'));
chai.use(require('chai-json-schema'));

module.exports = chai.expect;
