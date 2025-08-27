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