/*
Problem: Pick from both sides (max sum from both ends)
Given an array and a number B, pick B elements from either end to maximize the sum.
*/

function pickFromBothSides(A, B) {
  let cs = 0;
  let ms = 0;
  let n = B - 1;
  for (let i = 0; i <= n; i++){
    cs += A[i];
  }
  ms = cs;
  let i = B - 1;
  let j = A.length - 1;
  while (i >= 0) {
    cs -= A[i--];
    cs += A[j--];
    ms = Math.max(cs, ms);
  }
  return ms;
}

module.exports = { pickFromBothSides };