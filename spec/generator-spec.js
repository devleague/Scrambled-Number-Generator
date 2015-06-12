var chai = require("chai");
var generator = require("../js/generator.js");

var should = chai.should();
var expect = chai.expect;

describe("Scrambled Number Generator", function() {

  describe("generate function", function() {
    it('generate is a function', function() {

      generate.should.be.a('function');
    });
  });

  describe("generate input", function() {
    it('generate should only take numbers', function() {

      generate("").should.equal("Invalid input.");
      generate(NaN).should.equal("Invalid input.");
      generate([]).should.equal("Invalid input.");
    })

  });

  var out = generate(1000);

  describe("generate output", function() {

    out.length.should.equal(1000);


  });

  describe("output different order?", function() {

  });
});