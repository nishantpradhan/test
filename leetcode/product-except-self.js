function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Calculate left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
      answer[i] = leftProduct;
      leftProduct *= nums[i];
  }

  // Calculate right products and finalize answer
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
      answer[i] *= rightProduct;
      rightProduct *= nums[i];
  }

  return answer;
}

console.log( ([1, 2, 3, 4])); // Output: [24, 12, 8, 6]