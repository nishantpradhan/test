/*
Problem: Closest MinMax (subarray containing min and max)
Given an array, find the length of the smallest subarray containing both the minimum and maximum value.
*/

function closestMinMax(A) {
  let min_ele = Number.MAX_SAFE_INTEGER;
  let max_ele = Number.MIN_SAFE_INTEGER;
  let min_Index = -1, max_Index = -1;
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < A.length;i++) {
      min_ele = Math.min(min_ele, A[i]);
      max_ele = Math.max(max_ele, A[i]);
  }
  for(let  i=0 ; i<A.length ; i++) {
      if(A[i] == min_ele) min_Index = Math.max(min_Index, i);
      if(A[i] == max_ele) max_Index = Math.max(max_Index, i);
      if(min_Index != -1 && max_Index != -1) {
          let  len = Math.abs(max_Index - min_Index) + 1;
          ans = Math.min(ans, len);
      }
  }
  return ans;
}

module.exports = { closestMinMax };