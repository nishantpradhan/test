/*
Problem: Perfect square check
Given a number, check if it is a perfect square by summing its divisors.
*/

function perfectSquare(d) {
  let sum = 0;
  for (let j = 1; j <= d; j++) {
    if (d % j == 0) {
      sum += j;
      if (sum == d) {
        return true;
      }
      if (sum > d) {
        return false;
      }
    }
  }
  return false;
}

module.exports = { perfectSquare };