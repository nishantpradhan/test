// Problem: Power function (Exponentiation by squaring)
function power(base, exponent) {
  if (exponent < 0) {
    throw new Error('Negative exponents are not accepted');
  }
  var result = 1;
  while (exponent) {
      if ((exponent & 1) === 1) {
          result *= base;
      }
      exponent = exponent >> 1;
      base *= base;
  }
  return result;
}

module.exports = { power };