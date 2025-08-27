/*
Problem: Special Subsequences "AG"
Given a string, count the number of subsequences where 'A' appears before 'G'.
*/

function specialSubsequenceAG(A) {
  let ans = 0;
  let cnt = 0;
  for (let i = A.length-1; i >=0; i--){
    if (A[i] == 'G') {
      ans += 1;
    } else if (A[i]=='A') {
        cnt+=ans;
    }
  }
  return cnt;
}

module.exports = { specialSubsequenceAG };