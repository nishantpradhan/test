/*
Problem: Equilibrium index
Given an array, find the index where the sum of elements to the left equals the sum to the right.
*/

function equilibriumIndex(A) {
  let index = -1;
  let sum = 0;
  let n = A.length;
  let ls = 0;
  for (let ele of A) {
    sum += ele;
  }
  for (let i = 0; i < n; i++) {
    sum = sum - A[i];
    if (sum == ls) {
      return i;
    }
    ls += A[i];
  }
  return index;
}

module.exports = { equilibriumIndex };