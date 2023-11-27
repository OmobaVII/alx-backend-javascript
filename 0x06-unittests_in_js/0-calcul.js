function calculateNumber(a, b) {
  const num1 = Math.round(a);
  const num2 = Math.round(b);
  const sum = num1 + num2;
  return sum;
}

module.exports = calculateNumber;
