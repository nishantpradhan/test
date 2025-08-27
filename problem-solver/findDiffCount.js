// Problem: Find pairs with given difference
function findDiffCount(A, B) {
  let N = A.length;
  let count = 0,
      i = 0,
      j = 1;
  A = A.sort((a, b) => a - b)
  let p2 = -1,
      p1 = -1;
  while (j < N) {
      let diff = Math.abs(A[j] - A[i]);
      if (diff == B) {
          if (p1 != A[i] && p2 != A[j]) {
              count++;
              p1 = A[i];
              p2 = A[j];
          }
          i++;
          j++;
      } else if (diff > B) {
          i++;
          if (i == j) {
              j++;
          }
      } else {
          j++;
      }
  }
  return count;
}

module.exports = { findDiffCount };