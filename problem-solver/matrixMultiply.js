/*
Problem: Matrix Multiplication
Given two matrices, return their product.
*/

function matrixMultiply(A, B) {
  let out = [];
  for (let i = 0; i < A.length; i++) {
    let inner = [];
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < A[0].length; k++){
        sum += A[i][k] * B[k][j];
      }
      inner.push(sum);
    }
    out.push(inner);
  }
  return out;
}

module.exports = { matrixMultiply };