'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;


describe('Test', function () {
  it('should return Hello World', function () {
    expect(_2.default.helloWorld()).to.be.equal('Hello World');
  });
});