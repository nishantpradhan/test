
/*
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

Adjacent numbers for jth column of ith row is jth and (j+1)th column of (i + 1)th row

*/

function minimumTotal(triangle) {
  if (triangle.length === 0) return 0;
  
  let dp = [...triangle[triangle.length - 1]];
  console.log(dp)
  for (let i = triangle.length - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
        dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        console.log(dp)
      }
  }

  return dp[0];
}

// Example usage
const triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
];

// console.log(minimumTotal(triangle)); // Output: 11