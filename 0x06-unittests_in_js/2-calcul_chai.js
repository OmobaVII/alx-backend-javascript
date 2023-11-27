function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    const num1 = Math.round(a);
    const num2 = Math.round(b);
    const sum = num1 + num2;
    return sum;
  } else if (type === 'SUBTRACT') {
    const num1 = Math.round(a);
    const num2 = Math.round(b);
    const sub = num1 - num2;
    return sub;
  } else if (type == 'DIVIDE') {
    const num1 = Math.round(a);
    const num2 = Math.round(b);
    if (num2 === 0) {
      return 'Error';
    } else {
      const div = num1 / num2;
      return div;
    }
  }
}

module.exports = calculateNumber;
