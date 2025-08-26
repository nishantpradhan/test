const rotate = (matrix) => {
  let n = matrix.length

    for(let i  = 0 ;i < n ;i++){
        for(let j  = 0 ; j < n ;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }

    for (let i = 0 ; i <n ; i++) {
        matrix[i].reverse()
    }
  return matrix
}

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])) // [[7,4,1],[8,5,2],[9,6,3]]