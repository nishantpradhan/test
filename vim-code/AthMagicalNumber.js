


function AthMagicalNumber(A,B,C){

	function gcd(a,b){
		while(b != 0){
			let temp = b;
			b = a % b;
			a = temp;    
		}
		return a
	}


	function lcm(x,y){
		return (x * y)/ gcd(x,y)	
	}

	let MOD = Math.pow(10,9) + 7;
	let low = Math.min(B,C)
	let high = A * Math.min(B,C)

	while(low < high){
		let mid = Math.floor((low + high) / 2 )
		let count = Math.floor(mid/B) + Math.floor(mid/C) - Math.floor(mid/lcm(B,C))


		if (count < A) {
			low = mid + 1
		} else {
			high = mid 
		}

	}

	return low % MOD
}

console.log(AthMagicalNumber(19,11,13))


