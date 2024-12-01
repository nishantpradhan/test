function reverseWords(s) {
  let result = '';
  let word = '';
  let n = s.length;

  for (let i = n - 1; i >= 0; i--) {
      if (s[i] !== ' ') {
          // Build the word character by character
          word = s[i] + word;
      } else if (word.length > 0) {
          // Add the word to the result when encountering a space
          result += (result.length > 0 ? ' ' : '') + word;
          word = ''; // Reset the word
      }
  }

  // Add the last word if it exists
  if (word.length > 0) {
      result += (result.length > 0 ? ' ' : '') + word;
  }

  return result;
}

console.log(reverseWords("Hello World")); // Output: "blue is sky the")
