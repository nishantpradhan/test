var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0; // Edge case: empty needle
  if (haystack.length !== needle.length) {
      // Normal logic for unequal lengths (previous solution)
      for (let i = 0; i <= haystack.length - needle.length; i++) {
          let found = true;
          for (let j = 0; j < needle.length; j++) {
              if (haystack[i + j] !== needle[j]) {
                  found = false;
                  break;
              }
          }
          if (found) return i;
      }
      return -1;
  } else {
      // Case when lengths are the same
      return haystack === needle ? 0 : -1;
  }
};

console.log(strStr("abc", "c")); // Output: 2