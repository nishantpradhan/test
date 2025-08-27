//Get Max Sum
let A = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
];

const getMaxSumWithoutAdjacent = () => {
  let N = A[0].length;
  let notPick = Math.max(A[0][0], A[1][0]);
  let pick = 0;
  let intmdt;

  for (let i = 1; i < N; i++) {
    intmdt = notPick;
    pick = pick + Math.max(A[0][i], A[1][i]);
    notPick = Math.max(pick, notPick);
    pick = intmdt;
  }

  return Math.max(pick, notPick);
};

console.log("getMaxSumWithoutAdjacent ", getMaxSumWithoutAdjacent());