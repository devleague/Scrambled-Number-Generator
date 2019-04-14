var chai = require('chai');
var expect = chai.expect;
var generator = require('../generator.js');

describe('Generate 10 scrambled numbers', function () {
  it('should have length 10 and not be sorted', function () {
    var result = generator(10);
    expect(result).to.have.length(10);
    expect(result).to.not.deep.equals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should have length 1000 and not be sorted', function () {
    var notExpected = [];
    for (let i = 0; i < 1000; i++) {
      notExpected.push(i);
    }

    var result = generator(1000);
    expect(result).to.have.length(1000);
    expect(result).to.not.deep.equals(notExpected);
  });
});
