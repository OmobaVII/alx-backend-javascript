const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
  it('should return the sum of whole numbers', () => {
    const sum = calculateNumber(1, 4);
    assert.strictEqual(sum, 5);
  });
  it('should return the sum of rounded numbers', () => {
    const sum = calculateNumber(1.4, 3.5);
    assert.strictEqual(sum, 5);
  });
  it('should handle negative numbers', () => {
    const sum = calculateNumber(-1.4, -3.6);
    assert.strictEqual(sum, -5);
  });
  it('should handle large numbers', () => {
    const sum = calculateNumber(999999999, 0.5);
    assert.strictEqual(sum, 1000000000);
  });
  it('should work on zero', () => {
    const sum = calculateNumber(0, 0);
    assert.strictEqual(sum, 0);
  });
});
