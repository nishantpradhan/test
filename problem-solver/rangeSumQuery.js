/*
Problem: Range Sum Query
Given an array and a list of queries, return the sum of elements for each query range.
*/

function rangeSumQuery(A, B) {
  let prefA = [];
  let out = [];
  let sum = 0;
  for (let i = 0; i < A.length; i++){
    sum += A[i];
    prefA.push(sum);
  }
  for (let i = 0; i < B.length; i++){
    let sum = 0;
    let L = B[i][0]-1;
    let R = B[i][1]-1;
    if (L == 0) {
      sum = prefA[R];
    } else {
      sum=prefA[R]-prefA[L];
    }
    out.push(sum);
  }
  return out;
}

module.exports = { rangeSumQuery };