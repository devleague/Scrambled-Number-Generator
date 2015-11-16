// requires in chai file (external library)
var chai = require('chai');

// var for should and expect for tests
var should = chai.should();
var expect = chai.expect;

// requires in generator.js file (my library)
var generator = require('../js/generator.js');

// desribe is the description of the test case
describe('Generator', function () {
  // tells you what it should be
  it('should be a function', function () {
    // tells you what it expects to exist
    expect(generator).to.exist;
    // tells you what inside the () is to be
    // generator is to be a function
    // in generator.js file is where there should be a function
    expect(generator).to.be.a('function');
  });

  it('must accept a number', function () {
    expect(generator()).to.deep.equal([], 'should have a parameter');
    expect(generator(3)).to.not.deep.equal([], 'parameter should be a number');
  });

  describe('the result', function () {

    it('should be an array', function () {
      expect(generator(1000)).to.be.an.instanceof(Array, 'should return an array'); 
    });

    it('the values should be unique', function () {
      for (var i = 0; i < generator(10).length; i++) {
        expect(i).to.equal(generator(10).indexOf(generator(10)[i]), 'the number should be the index of array');
      }
    });

    it('the numbers should not exceed the length value', function () {
      expect(generator(10)).to.not.be.above(10, 'numbers in array should be less than arrayLength');
    });
      
    it('should be in a random order', function () {
      expect(generator(10)).to.not.equal(generator(10).sort(), 'numbers should be in random order');
    });
    
    
    it('the length equal the number passed in', function () {
      expect(generator(10).length).to.equal(10, 'array length should equal parameter');
    });

  });

});