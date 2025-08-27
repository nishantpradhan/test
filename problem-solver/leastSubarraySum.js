/*
Problem: Least subarray sum of size k
Given an array and an integer k, find the minimum sum of any subarray of size k and its starting index.
*/

function leastSubarraySum(a, b) {
  let currSum = 0;
  let n = a.length;
  let index = 0;
  for (let i = 0; i < b; i++){
    currSum+=a[i];
  }
  let min = currSum;
  for (let i = 1; i < a.length-b; i++){
    currSum = currSum - a[i - 1] + a[i + b - 1];
    min = Math.min(currSum, min);
    if (currSum < min) {
      min = currSum;
      index = i;
    }
  }
  return { min, index };
}

module.exports = { leastSubarraySum };