







function findRotatedSortedSearchArray(A,B){

	let left = 0; let right = A.length-1;

	while (left <= right) {

		let mid = Math.floor((left + right) / 2);
                console.log(mid)
		if (A[mid]===B) return mid

		if (A[left]  <= A[mid]){
			if(A[left] <= B && B < A[mid]){
				right = mid - 1
			} else {
				left  = mid + 1
			} 
		} else { 

			if (B > A[mid] && B <= A[right]){
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	return -1
}


console.log(findRotatedSortedSearchArray([ 101, 103, 106, 109, 158, 164, 182, 187, 202, 205, 2, 3, 32, 57, 69, 74, 81, 99, 100 ],202))
