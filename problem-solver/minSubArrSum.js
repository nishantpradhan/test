// Problem: Minimum subarray sum equal to B
function minSubArrSum(A, B) {
  let n = A.length;
  let l = 0, r = 0;
  let sum = A[l];
  while (r < n && l <= r) {
      if (sum == B) {
          return A.slice(l, r + 1);
      } else if (sum < B) {
          r++;
          if (r < n) {
              sum += A[r];
          }
      } else {
          sum -= A[l];
          l++;
          if (l > r && l < n - 1) {
              r++;
              sum += A[r];
          }
      }
  }
  return [-1];
}

module.exports = { minSubArrSum };