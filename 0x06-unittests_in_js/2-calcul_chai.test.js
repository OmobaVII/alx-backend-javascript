const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber()', () => {
  it('should return the sum of whole numbers', () => {
    const sum = calculateNumber('SUM', 1, 4);
    expect(sum).to.equal(5);
  });
  it('should return the sum of rounded numbers', () => {
    const sum = calculateNumber('SUM', 1.4, 3.5);
    expect(sum).to.equal(5);
  });
  it('should handle negative numbers', () => {
    const sum = calculateNumber('SUM', -1.4, -3.6);
    expect(sum).to.equal(-5);
  });
  it('should work on zero', () => {
    const sum = calculateNumber('SUM', 0, 0);
    expect(sum).to.equal(0);
  });
});
describe('SUBTRACT', () => {
  it('should return the sub of negative float', () => {
    const sub = calculateNumber('SUBTRACT', -3.6, -1.4);
    expect(sub).to.equal(-3);
  });
  it('should return the sub of float', () => {
    const sub = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(sub).to.equal(-4);
  });
  it('should handle type SUBTRACT', () => {
    const sub = calculateNumber('SUBTRACT', 4, 1);
    expect(sub).to.equal(3);
  });
  it('should give zero for zero', () => {
    const sub = calculateNumber('SUBTRACT', 0, 0);
    expect(sub).to.equal(0);
  });
});
describe('Divide', () => {
  it('should return the division', () => {
    const div = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(div).to.equal(0.2);
  });
  it('should give Error when the second number if 0', () => {
    const div = calculateNumber('DIVIDE', 1.4, 0);
    expect(div).to.equal('Error');
  });
  it('should work on whole number', () => {
    const div = calculateNumber('DIVIDE', 8, 2);
    expect(div).to.equal(4);
  });
});
