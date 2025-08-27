// Problem: Missing integer in array
function solution(A) {
  var missing = 1;
  A.sort(function(a, b) { return a-b });
  if ( A.indexOf(1) == -1) { return 1; }
  for ( var i = A.indexOf(1); i < A.length; i++) {
    if ( A[i] != missing) {
      missing++;
      if ( A[i] != missing ) { return missing; }
    }
  }
  return missing + 1;
}

function missingInteger(nums) {
  nums.sort((a, b) => a - b);
  let ans = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == ans) ans++;
  }
  return ans;
}

function getMissingNo(a, n) {
  let total = Math.floor((n + 1) * (n + 2) / 2);
  for (let i = 0; i < n; i++){
    total -= a[i];
  }
  return total;
}

module.exports = { solution, missingInteger, getMissingNo };