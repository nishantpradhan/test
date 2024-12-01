var minSubArrayLen = function(target, nums) {
  let n = nums.length;

  // Step 1: Compute prefix sums
  let prefixSum = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  let minLength = Infinity;

  // Step 2: Iterate over prefix sums and use binary search
  for (let i = 0; i < n; i++) {
      let targetSum = target + prefixSum[i];
      let left = i + 1, right = n;

      // Binary search for smallest `j` such that prefixSum[j] >= targetSum
      while (left <= right) {
          let mid = Math.floor((left + right) / 2);

          if (prefixSum[mid] >= targetSum) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }

      // Check if we found a valid `j`
      if (left <= n) {
          minLength = Math.min(minLength, left - i);
      }
  }

  return minLength === Infinity ? 0 : minLength;
};
