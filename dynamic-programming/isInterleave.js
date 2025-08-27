
/*
Problem Description
Given A, B, C find whether C is formed by the interleaving of A and B.
*/

function isInterleave(A, B, C) {
  if (A.length + B.length !== C.length) {
    return 0;
  }
  // Initialize the dp array
  const dp = Array(A.length + 1)
    .fill()
    .map(() => Array(B.length + 1).fill(false));
  // Set the base case
  dp[0][0] = true;

  for (let i = 0; i <= A.length; i++) {
    for (let j = 0; j <= B.length; j++) {
      //if i==0 and B[j-1] === C[i+j-1] then dp array will be dp[j-1]
      // this means string A is empty
      if (i === 0 && B[j - 1] === C[j - 1]) {
        dp[i][j] = dp[i][j - 1];
      }
      // this means string B is empty
      else if (j == 0 && A[i - 1] === C[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      }
      // this means A character match or is true but B does not match
      else if (A[i - 1] === C[i + j - 1] && B[j - 1] !== C[i + j - 1]) {
        dp[i][j] = dp[i - 1][j];
      }
      // this means B character match or is true but A does not match
      else if (B[j - 1] === C[i + j - 1] && A[i - 1] !== C[i + j - 1]) {
        dp[i][j] = dp[i][j - 1];
      }
      // when both match
      else if (A[i - 1] === C[i + j - 1] && B[j - 1] === C[i + j - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      }
    }
  }

  return  dp[A.length][B.length] ? 1 : 0;;
}
