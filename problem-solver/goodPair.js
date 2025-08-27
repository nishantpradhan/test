/*
Problem: Good Pair (pair sum equals B)
Given an array and a value B, check if there exists a pair of elements whose sum is B.
*/

function goodPair(A, B) {
  for (let i = 0; i < A.length-1; i++){
    for (let j = i + 1; j < A.length; j++){
      if (A[j] + A[i] == B && i!=j) {
        return true;
      }
    }
  }
  return false;
}

module.exports = { goodPair };