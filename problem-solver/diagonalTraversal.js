/*
Problem: Diagonal traversal of matrix
Given a matrix, return the elements in diagonal order (top-left to bottom-right).
*/

function diagonalTraversal(arr) {
  let m = arr[0].length;
  let n = arr.length;
  let result = [];
  for (let j = 0; j < m; j++){
    let x = j, i = 0;
    while (x >= 0 && i < n) {
      result.push(arr[i][x]);
      i++;
      x--;
    }
  }
  return result;
}

module.exports = { diagonalTraversal };