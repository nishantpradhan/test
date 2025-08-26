function getSpecialInteger(A, B) {
  let low = 1;
  let high = A.length;
  let N = high;
  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let maxSum = A.slice(0, mid).reduce((sum, num) => sum + num, 0);

    let currentSum = maxSum;

    for (let i = mid; i < N; i++) {
      currentSum += A[i] - A[i - mid];
      
      maxSum = Math.max(currentSum, maxSum);
    } 
     
    if (maxSum <= B) { 
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

console.log(getSpecialInteger([1, 2, 3, 4, 5], 10));
