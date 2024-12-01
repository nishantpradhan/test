var minWindow = function(s, t) {
  if (t.length > s.length) return "";
  
  const required = {};
  for (const char of t) {
      required[char] = (required[char] || 0) + 1;
  }
  
  let left = 0, right = 0;
  let formed = 0;
  const current = {};
  let minLength = Infinity;
  let result = [-1, -1];
  
  while (right < s.length) {
      const char = s[right];
      current[char] = (current[char] || 0) + 1;
      
      if (required[char] && current[char] === required[char]) {
          formed++;
      }
      
      while (formed === Object.keys(required).length) {
          if (right - left + 1 < minLength) {
              minLength = right - left + 1;
              result = [left, right];
          }
          
          const leftChar = s[left];
          current[leftChar]--;
          if (required[leftChar] && current[leftChar] < required[leftChar]) {
              formed--;
          }
          left++;
      }
      right++;
  }
  
  const [start, end] = result;
  return minLength === Infinity ? "" : s.slice(start, end + 1);
};

console.log((minWindow("ADOBECODEBANC", "ABC"))) // Output: "BANC"