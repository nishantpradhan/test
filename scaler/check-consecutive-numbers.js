const checkConsecutiveNumbers = (A) => {
  let n = A.length;
  if (n <= 1) {
    return 1;
  }

  let numSet = new Set(A);

  if (numSet.size !== n) {
    return 0;
  }

  let minNum = Math.min(...A);
  let maxNum = Math.max(...A);

  if (maxNum - minNum  !== n - 1) {
    return 0;
  }

  for (let i = minNum; i <= maxNum; i++) {
    if (!numSet.has(i)) {
      return 0;
    }
  }

  return 1;
};

console.log(checkConsecutiveNumbers([3, 2, 1, 4, 5]));
console.log(checkConsecutiveNumbers([]));
