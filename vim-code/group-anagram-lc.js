




function groupAnagram(aos){
	const anagrams = new Map();

	for(let s of aos){
	let sorted = s.split('').sort().join('')
	
		if(anagrams.has(sorted)){
		anagrams.get(sorted).push(s)
		}else{
		anagrams.set(sorted,[s])
		}

		
	}

	return Array.from(anagrams.values())


}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))
