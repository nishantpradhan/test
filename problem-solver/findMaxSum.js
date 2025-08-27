/*
Problem: Maximum subarray sum less than or equal to B
Given an array and a value B, find the maximum sum of any subarray that does not exceed B.
*/

function findMaxSum(A, B) {
  let cloSum = 0;
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = i; j < A.length; j++) {
      sum += A[j];
      if (sum <= B && cloSum < sum) {
        cloSum = sum;
      }
    }
  }
  return cloSum;
}

module.exports = { findMaxSum };