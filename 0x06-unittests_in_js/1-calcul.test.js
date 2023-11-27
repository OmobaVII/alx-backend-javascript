const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', () => {
  it('should return the sum of whole numbers', () => {
    const sum = calculateNumber('SUM', 1, 4);
    assert.strictEqual(sum, 5);
  });
  it('should return the sum of rounded numbers', () => {
    const sum = calculateNumber('SUM', 1.4, 3.5);
    assert.strictEqual(sum, 5);
  });
  it('should handle negative numbers', () => {
    const sum = calculateNumber('SUM', -1.4, -3.6);
    assert.strictEqual(sum, -5);
  });
  it('should work on zero', () => {
    const sum = calculateNumber('SUM', 0, 0);
    assert.strictEqual(sum, 0);
  });
});
describe('SUBTRACT', () => {
  it('should return the sub of negative float', () => {
    const sub = calculateNumber('SUBTRACT', -3.6, -1.4);
    assert.strictEqual(sub, -3);
  });
  it('should return the sub of float', () => {
    const sub = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.strictEqual(sub, -4);
  });
  it('should handle type SUBTRACT', () => {
    const sub = calculateNumber('SUBTRACT', 4, 1);
    assert.strictEqual(sub, 3);
  });
  it('should give zero for zero', () => {
    const sub = calculateNumber('SUBTRACT', 0, 0);
    assert.strictEqual(sub, 0);
  });
});
describe('Divide', () => {
  it('should return the division', () => {
    const div = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.strictEqual(div, 0.2);
  });
  it('should give Error when the second number if 0', () => {
    const div = calculateNumber('DIVIDE', 1.4, 0);
    assert.strictEqual(div, 'Error');
  });
  it('should work on whole number', () => {
    const div = calculateNumber('DIVIDE', 8, 2);
    assert.strictEqual(div, 4);
  });
});
