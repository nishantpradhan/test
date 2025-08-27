/*
Problem: Bulbs (minimum switches)
Given an array representing the state of bulbs (0 for off, 1 for on),
find the minimum number of switches needed to turn all bulbs on.
Each switch toggles the current bulb and all bulbs to its right.
*/

function minSwitches(A) {
  let state = 0;
  let cnt = 0;
  for (let i = 0; i < A.length; i++){
    if (A[i] == state) {
      cnt++;
      state = 1 - state;
    }
  }
  return cnt;
}

module.exports = { minSwitches };