/*
Problem: Matrix Addition
Given two matrices of the same size, return their sum.
*/

function matrixAdd(A, B) {
  let outerarray = [];
  for (let i = 0; i < A.length; i++){
    let innerSum = [];
    for (let j = 0; j < A[i].length; j++){
      let sum = A[i][j] + B[i][j];
      innerSum.push(sum);
    }
    outerarray.push(innerSum);
  }
  return outerarray;
}

module.exports = { matrixAdd };