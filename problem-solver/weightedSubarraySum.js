/*
Problem: Weighted subarray sum
Given an array, calculate the weighted sum where each element is multiplied by the number of subarrays it appears in.
*/

function weightedSubarraySum(A) {
  let sum=BigInt(0);
  let n=A.length;
  for (let i = 0; i < n; i++) {
    const j=BigInt(i + 1) * BigInt(n - i);
    sum += BigInt(A[i]) * j;
  }
  return sum;
}

module.exports = { weightedSubarraySum };