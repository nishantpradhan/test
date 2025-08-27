/*
Problem: Max and min in array
Given an array, find the maximum and minimum value.
*/

function maxMin(arr) {
  let max=Number.MIN_SAFE_INTEGER;
  let min=Number.MAX_SAFE_INTEGER;
  let n=arr[0];
  for(let i=1;i<=n;i++){
      min=Math.min(min,arr[i]);
      max=Math.max(max,arr[i]);
  }
  return { max, min };
}

module.exports = { maxMin };