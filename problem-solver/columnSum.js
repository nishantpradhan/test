/*
Problem: Column sum of matrix
Given a matrix, return an array of the sum of each column.
*/

function columnSum(A) {
  let outarr = [];
  for (let i = 0; i < A[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < A.length; j++) {
      sum += A[j][i];
    }
    outarr.push(sum);
  }
  return outarr;
}

module.exports = { columnSum };