/*
Problem: Array rotation (kth rotations)
Given an array and a number k, rotate the array k times to the right.
*/

function rotateArray(a, b) {
  let nos = b % a.length;
  let delCount = a.length - b;
  let delEle = a.splice(delCount, nos);
  a.splice(0,0,...delEle);
  return a;
}

module.exports = { rotateArray };