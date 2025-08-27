/**
 * Why i-1 Digits and j - digit Sum?
Building Incrementally:

To form an i-digit number that sums to j, you consider adding a single digit (ranging from 0 to 9) to the end of an i-1 digit number.
The sum of this new i-digit number will be the sum of the i-1 digit number plus the new digit.
Transition Relation:

If you add a digit (let's call it d) to an i-1 digit number that sums to j - d, the new sum becomes j.
Therefore, you need to find how many ways there are to form an i-1 digit number that sums to j - d, and add d to it.

Let's say we want to find how many ways we can form a 2-digit number that sums to 5 (dp[2][5]).

Step-by-Step:
First Digit (i = 1):

Possible sums with one digit range from 0 to 9.
For dp[1][5], there's 1 way to form a single-digit number that sums to 5: the number 5 itself.
Second Digit (i = 2):

Now we look at forming 2-digit numbers.
To form a 2-digit number that sums to 5, consider each possible last digit (d) from 0 to 9:
If d = 0, we need dp[1][5-0] = dp[1][5] (which is 1, corresponding to the number 5).
If d = 1, we need dp[1][5-1] = dp[1][4] (which is 1, corresponding to the number 4).
If d = 2, we need dp[1][5-2] = dp[1][3] (which is 1, corresponding to the number 3).
If d = 3, we need dp[1][5-3] = dp[1][2] (which is 1, corresponding to the number 2).
If d = 4, we need dp[1][5-4] = dp[1][1] (which is 1, corresponding to the number 1).
If d = 5, we need dp[1][5-5] = dp[1][0] (which is 1, corresponding to the number 0).
For d = 6 to 9, dp[1][5-d] would be 0, as there's no way to form those sums with a single digit.
Summing Up:

dp[2][5] = dp[1][5] + dp[1][4] + dp[1][3] + dp[1][2] + dp[1][1] + dp[1][0].
This is the sum of all the ways to form numbers with the required properties.
 */

const { result } = require("lodash");

function countNumbers(A, B) {
  const mod = 1000000007;
  const dp = new Array(A + 1).fill(0).map(() => new Array(B + 1).fill(0));
  console.log('dp :', dp)
  // Base case: For 0 digits, there is only one way to represent 0
  dp[0][0] = 1;

  // Fill the dp table
  for (let i = 1; i <= A; i++) {
    const I = i
    for (let j = 0; j <= B; j++) {
      const J = j
          // For the current digit, we can choose any digit from 0 to 9
      for (let digit = 0; digit<= 9; digit++) {
        const D = digit
        // console.log('digit :',D,dp[])
              // If the current digit is valid (not leading 0)
              if (digit === 0 && j === 0) continue;
              if (digit <= j) {
                  dp[i][j] = (dp[i][j] + dp[i - 1][j - digit]) % mod;
              }
          }
      }
  }

  return dp[A][B];
}

// console.log(countNumbers(75,22),'<<<<')


/**
 * 
 * Explanation
Initial Checks:

The function starts by checking if the input grid is valid (not empty).
Initialize Variables:

M is the number of rows.
N is the number of columns.
Create and Initialize the DP Table:

The DP table dp is created with the same dimensions as the input grid, initialized with zeros.
Set the Initial Value:

dp[0][0] is set to grid[0][0] as this is the starting point.
Fill the First Row:

For each cell in the first row, the minimum sum is the sum of all cells to its left.
Fill the First Column:

For each cell in the first column, the minimum sum is the sum of all cells above it.
Fill the Rest of the DP Table:

For each cell (i, j), calculate the minimum sum by taking the minimum of the sum from the cell above (dp[i - 1][j]) and the cell to the left (dp[i][j - 1]), then add the value of the current cell grid[i][j].
Return the Result:

The minimum sum to reach the bottom-right corner (M - 1, N - 1) is stored in dp[M - 1][N - 1].


When calculating the value for dp[i][j], you need to consider the minimum path to reach the current cell (i, j) from the possible moves:

From the Cell Above: The minimum path sum to reach (i, j) if you come from the cell directly above it (i - 1, j) is dp[i - 1][j] + grid[i][j].
From the Cell to the Left: The minimum path sum to reach (i, j) if you come from the cell directly to the left of it (i, j - 1) is dp[i][j - 1] + grid[i][j]

Let's walk through the process for calculating the DP table for this grid:

Initialization:

dp[0][0] = grid[0][0] = 1
First Row (only right moves):

dp[0][1] = dp[0][0] + grid[0][1] = 1 + 3 = 4
dp[0][2] = dp[0][1] + grid[0][2] = 4 + 1 = 5
First Column (only down moves):

dp[1][0] = dp[0][0] + grid[1][0] = 1 + 1 = 2
dp[2][0] = dp[1][0] + grid[2][0] = 2 + 4 = 6
Rest of the Table:

For cell (1, 1):
From above: dp[1 - 1][1] = dp[0][1] = 4
From left: dp[1][1 - 1] = dp[1][0] = 2
dp[1][1] = Math.min(dp[0][1], dp[1][0]) + grid[1][1] = Math.min(4, 2) + 5 = 7
For cell (1, 2):
From above: dp[1 - 1][2] = dp[0][2] = 5
From left: dp[1][2 - 1] = dp[1][1] = 7
dp[1][2] = Math.min(dp[0][2], dp[1][1]) + grid[1][2] = Math.min(5, 7) + 1 = 6
For cell (2, 1):
From above: dp[2 - 1][1] = dp[1][1] = 7
From left: dp[2][1 - 1] = dp[2][0] = 6
dp[2][1] = Math.min(dp[1][1], dp[2][0]) + grid[2][1] = Math.min(7, 6) + 2 = 8
For cell (2, 2):
From above: dp[2 - 1][2] = dp[1][2] = 6
From left: dp[2][2 - 1] = dp[2][1] = 8
dp[2][2] = Math.min(dp[1][2], dp[2][1]) + grid[2][2] = Math.min(6, 8) + 1 = 7


 */


function minPathSum(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
      return 0;
  }
  
  const M = grid.length;
  const N = grid[0].length;
  
  // Create the DP table
  const dp = Array.from({ length: M }, () => Array(N).fill(0));
  
  // Initialize the top-left corner
  dp[0][0] = grid[0][0];
  
  // Initialize the first row
  for (let j = 1; j < N; j++) {
      dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  
  // Initialize the first column
  for (let i = 1; i < M; i++) {
      dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  
  // Fill in the rest of the DP table
  for (let i = 1; i < M; i++) {
      for (let j = 1; j < N; j++) {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
  }
  
  return dp[M - 1][N - 1];
}

// Example usage:
// const A = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ];
// console.log(minPathSum(A)); // Output: 7


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



/*

Problem Description
The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).

In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

Given a 2D array of integers A of size M x N. Find and return the knight's minimum initial health so that he is able to rescue the princess.

*/

const calculateMinimumHP = (dungeon) => {

  if (!dungeon || !dungeon.length || !dungeon[0].length) {
    return 0
  }
  let M = dungeon.length //rows
  let N = dungeon[0].length //columns

  let dp = Array.from({ length: M + 1 }, () => Array(N + 1).fill(Infinity))

  dp[M - 1][N] = dp[M][N - 1] = 1;

  for (let i = M - 1; i >= 0; i--){
    for (let j = N - 1; j >= 0; j--){
      let minValue = Math.min(dp[i + 1][j], dp[i][j + 1])
      dp[i][j] = Math.max(1, minValue - dungeon[i][j])
    }
  }

return dp[0][0]
}


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






/*
2nd way
*/
//A = "aabcc" B = "dbbca" C = "aadbbbaccc"
// function isInterleave(A, B, C) {
//   if (A.length + B.length !== C.length) {
//     return false;
//   }

//   // Initialize the dp array
//   const dp = Array(A.length + 1).fill().map(() => Array(B.length + 1).fill(false));
  
//   // Set the base case
//   dp[0][0] = true;

//   // Initialize first row
//   for (let j = 1; j <= B.length; j++) {
//     dp[0][j] = dp[0][j-1] && B[j-1] === C[j-1];
//   }
//   console.log('after first row', dp)
//   // Initialize first column
//   for (let i = 1; i <= A.length; i++) {
//     dp[i][0] = dp[i-1][0] && A[i-1] === C[i-1];
//   }
//   console.log('after first column', dp)
//   // Fill the rest of the dp table
//   for (let i = 1; i <= A.length; i++) {
//     for (let j = 1; j <= B.length; j++) {
//       dp[i][j] = (dp[i-1][j] && A[i-1] === C[i+j-1]) || 
//         (dp[i][j - 1] && B[j - 1] === C[i + j - 1]);
      
//       console.log(`For i = ${i} and j = ${j}`);
//       console.log('\n')
//       console.log(`(dp[${i - 1}][${j}] && A[${i - 1}] == C[${i + j - 1}]) || (dp[${i}][${j - 1}] && B[${j - 1}] == C[${i + j - 1}])`);

//       console.log(`(${dp[i - 1][j]} && '${A[i - 1]}' == '${C[i + j - 1]}') || (${dp[i][j - 1]} && '${B[j - 1]}' == '${C[i + j - 1]}') -> ${dp[i][j]}`);
      
//       console.log('\n')

//     }
//   }

//   return dp[A.length][B.length];
// }
// console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"))

console.log(isInterleave("aaab", "axy", "aaxaby"))

// All main functions have been moved to their own files for separation and clarity.