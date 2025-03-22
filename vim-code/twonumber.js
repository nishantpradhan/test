
/* space and time complexity of O(n) hashmap approach
 * 
 * */


	function twoNumber(nums,target){
	 let map = new Map()

	for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i] 

		if(map.has(complement)){
		return [map.get(complement),i]
		}

		map.set(nums[i],i)

	}		
	
	
	return []

	} 
	
	

 console.log(twoNumber([3,1,4,2],6))
