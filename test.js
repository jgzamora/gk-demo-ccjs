var expect = require('chai').expect
  , _ = require("lodash");

describe('lodash test', function() {
  it('should use any', function() {
    expect(_.some([null, 0, 'yes', false], Boolean)).to.be.true;
  });
});
