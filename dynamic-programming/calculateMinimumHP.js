

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
