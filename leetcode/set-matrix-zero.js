var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let firstRowZero = false;
  let firstColZero = false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
        if (i == 0) firstRowZero = true;
        if (j == 0) firstColZero = true;
      }
    }
  }
  console.log('first for loop');
  console.log(matrix);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  console.log('second for loop');
  console.log(matrix);

  if (firstRowZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColZero) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix
};

console.log(
  setZeroes([
    [1, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
); // [[1,0,1],[0,0,0],[1,0,1]]
