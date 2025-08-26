var wordPattern = function(pattern, s) {
  let char = s.split(" ")
  let ptr = [];
  let str = [];
  if (pattern.length !== char.length){
      return false
  }

  for(let i = 0 ; i < pattern.length ; i++){
      ptr.push(pattern.indexOf(pattern[i]))
      str.push(char.indexOf(char[i]))
  }
  console.log(ptr, str , char,pattern)

  for(let i = 0 ; i < pattern.length ; i++){
       if(ptr[i] != str[i]){
          return false
       }
  }
  return true
};

console.log(wordPattern("abba", "dog cat cat dog")); // true