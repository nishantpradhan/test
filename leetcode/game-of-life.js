const gameOfLife = (board) => {
  let m = board.length;
  let n = board[0].length;

  let directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  const getLiveCount = (row, col) => {
    let liveCount = 0;
    for (let [dx, dy] of directions) {
      let neighRow = row + dx;
      let neighCol = col + dy;
      if (neighRow >= 0 && neighCol >= 0 && neighRow < m && neighCol < n && 
        Math.abs(board[neighRow][neighCol]) === 1) {
        liveCount++;
      }
    }
    return liveCount;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let liveCount = getLiveCount(i, j);
      if (board[i][j] === 1 && (liveCount < 2 || liveCount > 3)) {
        board[i][j] = -1;
      }
      if (board[i][j] === 0 && liveCount === 3) {
        board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 1;
      }

      if (board[i][j] === -1) {
        board[i][j] = 0;
      }
    }
  }
  return board;
};

console.log(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]));
// [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
