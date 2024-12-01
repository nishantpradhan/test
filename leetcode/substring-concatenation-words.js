function findSubstring(s, words) {
  if (!s || words.length === 0) return [];

  let wordLength = words[0].length;
  let totalLength = wordLength * words.length;
  let wordCount = {};

  // Create the frequency map for words
  for (let word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
  }

  let result = [];

  // Sliding window approach
  for (let i = 0; i < wordLength; i++) {
      let left = i, right = i;
      let currentCount = {};

      while (right + wordLength <= s.length) {
          // Extract a word of `wordLength`
          let word = s.substring(right, right + wordLength);
          right += wordLength;

          if (wordCount[word]) {
              currentCount[word] = (currentCount[word] || 0) + 1;

              // If the word count exceeds the allowed frequency, shrink the window
              while (currentCount[word] > wordCount[word]) {
                  let leftWord = s.substring(left, left + wordLength);
                  currentCount[leftWord]--;
                  left += wordLength;
              }

              // If the window size matches `totalLength`, we found a valid substring
              if (right - left === totalLength) {
                  result.push(left);
              }
          } else {
              // Reset the window if the word is invalid
              currentCount = {};
              left = right;
          }
      }
  }

  return result;
}

console.log(findSubstring("barfoofoobarman", ["foo","bar"])); // Output: [0,9 ]