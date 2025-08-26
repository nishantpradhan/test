const secondLargest = (A) => {
  if (A.length === 1) return -1
  let largest = A[0]
  let secondLargest = -1

  for (let num of A) {
    if (num > largest) {
      secondLargest = largest
      largest = num
    } else if (num < largest && num > secondLargest) {
      secondLargest = num
    }
  }
  return secondLargest === -1 ? -1 : secondLargest
}
console.log(secondLargest([13,7,16,18,14,17,18,8,10]))
