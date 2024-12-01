var lengthOfLongestSubstring = function(s) {
  let lastIndex = Array(128).fill(-1); // Array to track the last index of characters
  let maxLength = 0;
  let left = 0; // Start of the sliding window

  for (let right = 0; right < s.length; right++) {
      const char = s[right];
      // If the character was seen before, move `left` to avoid duplicate
      if (lastIndex[char.charCodeAt(0)] >= left) {
          left = lastIndex[char.charCodeAt(0)] + 1;
      }
      // Update the last index of the current character
      lastIndex[char.charCodeAt(0)] = right;
      // Update the maximum length
      maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

