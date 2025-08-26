
const countPermutationSubstrings = (A, B) => {
  const N = A.length
  const M = B.length
  const freqA = Array(26).fill(0)
  const window = Array(26).fill(0)
  let count = 0
  const aCharCode = 'a'.charCodeAt(0)
  for (let ch of A) {
    freqA[ch.charCodeAt(0) - aCharCode]++
  }

  for (let i = 0; i < N; i++) {
    window[B.charCodeAt(i) - aCharCode]++
  }

   count = isArrayEqual(freqA, window) ? 1 : 0

  for (let i = N; i < M; i++) {
    console.log( i,'i - N')
    window[B.charCodeAt(i - N) - aCharCode]--
    window[B.charCodeAt(i) - aCharCode]++
    // window[]
    if (isArrayEqual(freqA, window)) {
      count++
    }
  }

  return count
}



function isArrayEqual(freq, window) {
  for (let i = 0; i < 26; i++){
    if (a[i] != b[i]) {
      return false
    }
  }
  return true
}


// Example usage:
const A = "ab";
const B = "abxaba";
console.log(countPermutationSubstrings(A, B));