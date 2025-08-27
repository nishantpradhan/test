// Problem: Longest palindrome substring
function palindrome(A) {
  let max = 0;
  let x = -1;
  let y = -1;
  for (let i = 0; i < A.length; i++) {
    let [k, l] = expandCentre(A, i, i);
    if (l - k + 1 > max) {
      max = l - k + 1;
      x = k;
      y = l;
    }
  }
  for (let i = 0; i < A.length - 1; i++) {
    let [k, l] = expandCentre(A, i, i + 1);
    if (l - k + 1 > max) {
      max = l - k + 1;
      x = k;
      y = l;
    }
  }
  return A.substring(x, y + 1);
}

function expandCentre(A, i, j) {
  while (i >= 0 && j < A.length && A[i] == A[j]) {
    i--;
    j++;
  }
  return [i + 1, j - 1];
}

module.exports = { palindrome, expandCentre };