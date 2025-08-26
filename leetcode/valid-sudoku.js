
const isValidSudoku = (board) => {
  const rowsets = new Array.from({ length: 9 }, () => new Set());
  const colsSets = new Array.from({ length: 9 }, () => new Set());
  const boxesSets = new Array.from({ length: 9 }, () => new Set());
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      if (num === '.') continue;
      
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      
      if (rowsets[i].has(num) || colsSets[j].has(num) || boxesSets[boxIndex].has(num)) {
        return false;
      }
      rowsets[i].add(num)
      colsSets[j].add(num);
      boxesSets[boxIndex].add(num);
    }
  }
  return true
}