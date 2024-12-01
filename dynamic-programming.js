//fibonacci

// const calcFib = (n) => {
//   if (n <= 1 || n <= 2) {
//     return n
//   }
//   return calcFib(n - 1) + calcFib(n - 2);
// }

// let N = 6;
// console.log('fib :', calcFib(2))

// let n = 55007;
// let N = n + 1
// let dp = new Array(N).fill(-1)

// const calcFibDp = (n) => {
//   if (n <= 1) {
//     return dp[n] = 1
//   }
//   if (dp[n] != -1) {
//     return dp[n]
//   }
//   dp[n] = calcFibDp(n - 1) + calcFibDp(n - 2)
//   return dp[n]
// }

// console.log('fib :', calcFibDp(n))

//2nd approach
// const calcFibDp = (n) => {
//   dp[0] = 0;
//   dp[1] = 1;
//   let mod = 1000000007;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
//   }
//   return dp[n] % mod
// }
// console.log('fib :', calcFibDp(n + 1))

//3 rd approach
// const calcFibDp = (n) => {
//   n = n + 1;
//   let a = 0,
//     b = 1;
//   let c;
//   let mod = 1000000007;
//   for (let i = 2; i <= n; i++) {
//     c = (a + b) % mod;
//     a = b % mod;
//     b = c % mod;
//   }
//   return c % 1000000007
// }
// console.log('fib :', calcFibDp(n))

// const fib = (n) => {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   let prev = 1;
//   let prevPrev = 0;
//   let ans = 0;
//   for (let i = 2; i <= n; i++) {
//     ans = prev + prevPrev;
//     prevPrev = prev;
//     prev = ans;
//   }
//   return ans;
// }

// process.stdin.on('data', data => {
//   let output = data.toString().trim()
//   console.log(output)
//   output = fib(Number(output))
//   console.log(output.toString().trim())
//   process.stdout.write(output.toString())
//   process.exit();
// })

// Q3. Minimum Number of Perfect Squares
/*
min perfect square with greedy approach does not consider the min count and so fails
to consider minimum count use another approach by subtracting negative increasing numbers till n(no to find ps of)
for e.g N=14 then subtract -1^2,-2^2,-3^2 and take a min amoung them to get final min perfect square and add +1
addition of 1 due to subtration of perfect square with the original number  taking place 
*/

// let n = 12;
// let dp = new Array(n + 1)
// const getMinPs = (n) => {
//   if (n <= 0) {
//     return 0
//   }
//   dp[0] = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = i;
//     for (let j = 1; j * j <= i; j++) {
//       ans = Math.min(ans, dp[i - (j * j)] + 1)
//     }
//     dp[i] = ans
//   }
//   return dp[n]
// }

// console.log('Minimum perfect square :', getMinPs(n))

//Get Max Sum
let A = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
];

const getMaxSumWithoutAdjacent = () => {
  let N = A[0].length;
  let notPick = Math.max(A[0][0], A[1][0]);
  let pick = 0;
  let intmdt;

  for (let i = 1; i < N; i++) {
    intmdt = notPick;
    pick = pick + Math.max(A[0][i], A[1][i]);
    notPick = Math.max(pick, notPick);
    pick = intmdt;
  }

  return Math.max(pick, notPick);
};

console.log("getMaxSumWithoutAdjacent ", getMaxSumWithoutAdjacent());
