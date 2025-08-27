/*
Problem: Count ways to make sum of odd/even indexed elements equal by removing one element
Given an array, count the number of ways to remove one element so that the sum of even and odd indexed elements is equal.
*/

function countWaysEqualOddEven(arr) {
  let prefEven = [];
  let prefOdd = [];
  let sumeven = 0;
  let sumodd = 0;
  let n = arr.length;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 ==0) {
      sumeven += arr[i];
    } else {
      sumodd += arr[i];
    }
    prefEven.push(sumeven);
    prefOdd.push(sumodd);
  }
  for (let i = 0; i < n; i++) {
    let sumEven, sumOdd;
    if (i == 0) {
      sumEven = prefOdd[n - 1] - prefOdd[i];
      sumOdd = prefEven[n - 1] - prefEven[i];
    } else {
      sumEven = prefEven[i - 1] + (prefOdd[n - 1] - prefOdd[i]);
      sumOdd = prefOdd[i - 1] + (prefEven[n - 1] - prefEven[i]);
    }
    if (sumEven == sumOdd) {
       cnt++;
     }
  }
  return cnt;
}

module.exports = { countWaysEqualOddEven };