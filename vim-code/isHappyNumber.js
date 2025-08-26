

const getNextNumber = (number) => {
	let sum = 0 
	while(number > 0){

		let digit = number % 10
		sum += digit * digit
		number = Math.floor(number / 10)	 

	}   

	return sum
}


const isHappyNumber = (n) => {
	let seen = new Set()
	while(n !== 1 && !seen.has(n)){
		seen.add(n)
		n = getNextNumber(n)

	}
	return n === 1
}




console.log(isHappyNumber(19))




