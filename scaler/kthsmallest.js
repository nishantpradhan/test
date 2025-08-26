const kthSmallestElement = (A, B) => {
  const n = A.length;

  for (let i = 0; i < B; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (A[j] < A[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr[B - 1];
};
