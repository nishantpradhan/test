/*
Problem: Remove first occurrence of same consecutive characters
Given a string, remove the first occurrence of any consecutive duplicate characters.
*/

function doubleCharacterTrouble(A) {
  let s = [A[0]];
  for (let i = 1; i < A.length; i++) {
    if (s[s.length - 1] !== A[i]) {
      s.push(A[i]);
    } else {
      s.pop();
    }
  }
  return s.join("");
}

module.exports = { doubleCharacterTrouble };