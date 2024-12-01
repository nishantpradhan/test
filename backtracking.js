let N = [1, 2, 3, 4];


function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function printpermutations(array, N, i) {
  if (i === N - 1) {
    // console.log(array)
    return
  }

  for (let j = i; j < N; j++) {
    console.log('i ', i, 'j ', j)

    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
    printpermutations(array, N, i + 1)
    tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
}

printpermutations(N, N.length, 0)