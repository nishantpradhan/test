/*
Problem: Time complexity examples
Demonstrate O(N*N), O(N), and O(logN) time complexities with simple loops.
*/

function timeComplexityExamples(N) {
  let A = 0, b = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      A = A + j;
    }
  }
  for (let k = 0; k < N; k++) {
    b = b + k;
  }
  let count = 0;
  for (let i = N; i > 0; i /= 2) {
    for (let j = 0; j < i; j++) {
      count += 1;
    }
  }
  return {A, b, count};
}

module.exports = { timeComplexityExamples };