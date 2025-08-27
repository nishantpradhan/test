/*
Problem Description:
You are tasked with counting the number of ways you can form A-digit numbers such that the sum of the digits in each number is equal to B. 

The numbers you form should adhere to the following rules:
1. They must be exactly A digits long.
2. The sum of their digits must be exactly B.
3. They can include the digit 0, but not as a leading digit (i.e., 0123 is not a valid 4-digit number).

Dynamic Programming Approach:
We will use a dynamic programming approach to solve this problem. We define a 2D array dp where dp[i][j] represents the number of ways to form i-digit numbers such that the sum of the digits is j.

Transition Relation:
To fill in the dp table, we consider the following:
- If we are at dp[i][j], we want to find out how many ways we can get here by adding a digit d (0 <= d <= 9) to an (i-1)-digit number.
- The (i-1)-digit number must have a sum of j-d for the new digit d to make the total sum j.
- Therefore, we look at dp[i-1][j-d] for all possible digits d.

Why i-1 Digits and j - digit Sum?
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

module.exports = { countNumbers };