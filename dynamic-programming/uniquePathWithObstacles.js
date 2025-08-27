
/*
Given a grid of size n * m, lets assume you are starting at (1,1) and your goal is to reach (n, m). 
At any instance, if you are on (x, y), you can either go to (x, y + 1) or (x + 1, y).

Now consider if some obstacles are added to the grids. 
Return the total number unique paths from (1, 1) to (n, m).

Note: 
1. An obstacle is marked as 1 and empty space is marked 0 respectively in the grid.
2. Given Source Point and Destination points are 1-based index.

A = [
        [0, 0, 0]
        [0, 1, 0]
        [0, 0, 0]
     ]

     A = [ [1, 1] ]

*/

// const A = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0]
// ]


// function uniquePathWithObstacles(A) {
//   const m = A.length
//   const n = A[0].length
  
//   if (A[0][0] === 1 || A[m - 1][n - 1] === 1) {
//     return 0;
//   }

//   //Create the dp table
//   const dp = Array.from({ length: m }, () => Array(n).fill(0))
  
//   //initiaze the starting point
//   dp[0][0] = 1
  
//   //initialize the first row , n is no of columns and j is each columns
//   for (let j = 1; j < n; j++){
//     dp[0][j] = A[0][j] === 0 ? dp[0][j - 1] : 0
//   }

//   //initialize the first col, m for rows and i for each rows
//   for (let i = 1; i < m; i++){
//     dp[i][0] = A[i][0] === 0 ? dp[i-1][0] : 0
//   }
  
//   for (let i = 1; i < m; i++){
//     for (let j = 1; j < n; j++) {
//       if (A[i][j] === 0) {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//       } else {
//         dp[i][j]=0
//       }
//     }
//   }
// return dp[m-1][n-1]
// }

// console.log(uniquePathWithObstacles(A))


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