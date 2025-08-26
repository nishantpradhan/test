



const longestConsecutiveNumber = (nums)=> {
 let numSet = new Set(nums)
 let maxLength = 0 ;
   for(let num of numSet){

	if(!numSet.has(num - 1)){
	 
	 let currentNum = num	
	let currentStreak = 1

  	while(numSet.has(currentNum + 1)){
	  currentStreak++;
		currentNum++;

	}
      maxLength = Math.max(maxLength, currentStreak)
 

	}
     
   }	


 return maxLength
}











console.log(longestConsecutiveNumber([1,4,2,100,3]))
