var chai = require("chai");
var generate = require("../js/generator.js");

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
      generate(undefined).should.equal("Invalid input.");
      generate({}).should.equal("Invalid input.");
    })

  });

  describe("generate output", function() {

    it('generate proper length', function() {

      generate(1000).length.should.equal(1000);
      generate(1).length.should.equal(1);
    });

    var thousand1 = generate(1000);
    var thousand2 = generate(1000);

    var thousand11 = thousand1.join();
    var thousand22 = thousand2.join();

    var thousand1str = thousand1.sort().join();
    var thousand2str = thousand2.sort().join();

    it('generates the same unique numbers for given input', function() {

      thousand1str.should.equal(thousand2str);
    });

    it('generates different order for given input', function() {

      thousand11.should.not.equal(thousand22);
    });


  });

  describe("output different order?", function() {

  });
});