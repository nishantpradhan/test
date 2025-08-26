
const spiralMatrixII = (A) => {
  let array = Array.from({ length: A }, () => Array(A).fill(0));
    let num = 1;
    let top = 0; let left = 0 ; let bottom = A - 1 ; let right = A-1;

    while(top <= bottom && left <= right){

            for(let i = left ; i <= right ; i++){
                    array[top][i] = num++
            }
            top++;

            for(let j = top ; j <= bottom ; j++){
                array[j][right] = num++;
            }
            right--;


            for(let i = right ; i >= left ; i--){
                    array[bottom][i]= num++
            }
            bottom--;


            for(let j = bottom ; j >= top ; j--){
                    array[j][left] = num++
            }
            left++
    }
    return array
}

console.log(spiralMatrixII(5)); // [[1,2,3],[8,9,4],[7,6,5]]