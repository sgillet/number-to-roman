const chai = require('chai');
const expect = chai.expect;
const NumberToRoman = require('../src/number-to-roman');

describe("Number to Roman", function() {
  it("should return I when 1 is passed", function() {
    expect(NumberToRoman.convert(1)).to.equal('I');
  });

  it("should return II when 2 is passed", function() {
    expect(NumberToRoman.convert(2)).to.equal('II');
  });

  it("should return III when 3 is passed", function() {
    expect(NumberToRoman.convert(3)).to.equal('III');
  });

  it("should return IV when 4 is passed", function() {
    expect(NumberToRoman.convert(4)).to.equal('IV');
  });

});
