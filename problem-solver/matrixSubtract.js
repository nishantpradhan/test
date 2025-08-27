/*
Problem: Matrix Subtraction
Given two matrices of the same size, return their difference.
*/

function matrixSubtract(A, B) {
  let outarr = [];
  for (let i = 0; i < A.length; i++){
    let innersub = [];
    for (let j = 0; j < A[0].length; j++){
      let sub = A[i][j] - B[i][j];
      innersub.push(sub);
    }
    outarr.push(innersub);
  }
  return outarr;
}

module.exports = { matrixSubtract };