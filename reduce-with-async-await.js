// const anotherPromise =async  (acc)=> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Hello:', acc);
//       return resolve();
//     }, 10);
//   });
// }
// let data = [{ title: "xxx" }, { title: "ccc" }];
// data = data.sort((a, b) => a.title - b.title);
// console.log(data, "<<<");
// const arr=[1,2,3,4,5]
// const get = require('lodash/get')
// const arr = [1, 1, 2, 2, 3]
// let uniqEle = 0
// for (let i of arr) {
//     console.log(i,'i')
//     uniqEle=uniqEle ^ i
//     console.log(uniqEle,'uniqEle')
// }
//difference
// console.log('>>')

function sumPairsCount(A, B) {
  let p1 = 0,
    p2 = A.length - 1;
  let ans = 0;
  while (p1 < p2) {
    if (A[p1] + A[p2] == B) {
      ans++;
      p1++;
      p2--;
    } else if (A[p1] + A[p2] < B) {
      p1++;
    } else {
      p2--;
    }
  }
  return ans;
}

let A = [5, 10, 20, 100, 105];
let B = 110;
console.log(sumPairsCount(A, B));

// let A = [1,2,3,4,5,6];
// let preWt = 0;
// function maxArea(A) {
//     let i = 0, j = A.length - 1;
//     while (i != j) {
//         let wt = (j - i) * Math.min(A[i], A[j]);
//         if (A[i] < A[j]) {
//             i++;
//         } else {
//             j--;
//         }
//         if (wt > preWt) {
//             preWt=wt
//         }
//     }
//     return preWt;
// }

// console.log(maxArea(A))

// function findDiffCount(A, B) {
//     let N = A.length;
//     let count = 0,
//         i = 0,
//         j = 1;
//     A = A.sort((a, b) => a - b)
//     let p2 = -1,
//         p1 = -1;
//     while (j < N) {
//         let diff = Math.abs(A[j] - A[i]);
//         if (diff == B) {
//             if (p1 != A[i] && p2 != A[j]) {
//                 count++;
//                 p1 = A[i];
//                 p2 = A[j];
//             }

//             i++;
//             j++;
//         } else if (diff > B) {
//             i++;
//             if (i == j) {
//                 j++;
//             }
//         } else {
//             j++;
//         }
//     }
//     return count;
// }

// let A = [ 3, 3, 2, 7, 9, 6, 8, 7, 2, 9, 10, 3, 8, 10, 6, 5, 4, 2, 3];
// let B = 3;
// console.log(findDiffCount(A, B), '<<<')

// 'use strict';

// function minSubArrSum(A, B) {
//     let n = A.length;
//     let l = 0, r = 0;
//     let sum = A[l];
//     while (r < n && l <= r) {
//         if (sum == B) {
//             return A.slice(l, r + 1);
//         } else if (sum < B) {
//             r++;
//             if (r < n) {
//                 sum += A[r];
//             }
//         } else {
//             sum -= A[l];
//             l++;
//             if (l > r && l < n - 1) {
//                 r++;
//                 sum += A[r];
//             }
//         }
//     }
//     return [-1];
//   }

//   console.log(minSubArrSum([9, 11, 7, 5, 8],17))

// console.log([1,2].slice(0,1))

// function power (base, exponent) {

//     if (exponent < 0) {
//     	throw new Error ('Negative expoenents are not acceted');
//     }

//     var result = 1;

//     while (exponent) {
//         if ((exponent & 1) === 1) {
//             result *= base;
//         }
//         exponent = exponent >> 1;
//         base *= base;
//     }
//       return result;
// }

// console.log(power(-1, 3)%3); // 8

// function sumOfNums(A) {
//     if (A % 10 == A) {
//         return A
//     }
//     return sumOfNums(Math.floor(A/10)) + A%10
// }

// function solve(A) {
//     //param A : integer
//     //return an integer
//     if (A % 10 == A) {
//         if (A == 1) {
//             return 1
//         }
//         else {
//             return 0
//         }
//     }
//     return solve(sumOfNums(A))
// }
// console.log(solve(4523113))

// function power(A, B, C) {
//     if (B == 0) return 1 % C;
//     let ans = 1n,
//         base = BigInt(A),
//         c1 = BigInt(C);

//     while (B > 0) {

//         if (B % 2 == 1) {
//             ans = (ans * base) % c1;
//             B--;
//         } else {

//             base = (base * base) % c1;
//             B = B >> 1;
//         }

//     }
//     if (ans < 0) ans = (ans + c1) % c1;
//     return Number(ans);
// }

//  console.log(power(-1,1,20),'<<<<')

// const obj = {
//     test: true,
//     test2:false
// }

// const ar2 = [
//     obj.test && {
//         name: 'nisshatt',
//         card:'hdfc'
//     },
//     obj.test2 && {
//         name: 'pradhan',
//         card:'hdfc1'
//     }
// ]
// console.log('arr',ar2)

// console.log(get(arr.msrp,'[0].value'),'<<<')
// const isAplha = (A) => {
//   let str = A.join('')
//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt[i]
//     if (!(code > 64 && code < 91) && // upper alpha (A-Z)
//       !(code > 96 && code < 123)) { // lower alpha (a-z)
//       return 0;
//     }
//   }
//   return 1
// }
// function power(x, y)
// {
//     if (y == 0)
//         return 1;
//     else if (y % 2 == 0)
//         return power(x, parseInt(y / 2)) *
//                power(x, parseInt(y / 2));
//     else
//         return x * power(x, parseInt(y / 2)) *
//                    power(x, parseInt(y / 2));
// }

// console.log( 'isAlpha',power(2,4))

// let arr = [
//   {
//     "globalId": 331,
//     "matchingArticles": [
//       {
//         "cai": "002214",
//         "labelling": [
//           {
//             "key": "euDirectiveNumber",
//             "value": "NA"
//           }
//         ],
//         "mspn": null,
//         "isRunflat": false,
//         "isTrackConnect": false,
//         "ean": 3528700022148,
//         "rimsize": 400,
//         "position": "front",
//         "pressure": [],
//         "exactMatch": false,
//         "size": "165  R  400 X    87S    TT",
//         "normalizedSize": "165/85R400",
//         "vintageSize": "155-R-400",
//         "isIcegrip": false,
//         "has3pmsf": false,
//         "euLabelling": {
//           "productSheet": {
//             "wording": "Fiche d'information produit"
//           },
//           "euTooltip": {
//             "wording": "<p>Plus d'informations sur le nouvel etiquetage <a href=\"/auto/etiquetage-ue\">ici</a>.</p>\n"
//           },
//           "euDirectiveNumber": "NA"
//         }
//       },
//       {
//         "cai": "002213",
//         "labelling": [
//           {
//             "key": "euDirectiveNumber",
//             "value": "NA"
//           }
//         ],
//         "mspn": null,
//         "isRunflat": false,
//         "isTrackConnect": false,
//         "ean": 3528700022131,
//         "rimsize": 400,
//         "position": "rear",
//         "pressure": [],
//         "exactMatch": false,
//         "size": "155  R 400 X    83S   TT",
//         "normalizedSize": "155/85R400",
//         "vintageSize": "165-R-400",
//         "isIcegrip": false,
//         "has3pmsf": false,
//         "euLabelling": {
//           "productSheet": {
//             "wording": "Fiche d'information produit"
//           },
//           "euTooltip": {
//             "wording": "<p>Plus d'informations sur le nouvel etiquetage <a href=\"/auto/etiquetage-ue\">ici</a>.</p>\n"
//           },
//           "euDirectiveNumber": "NA"
//         }
//       }
//     ]
//   }
// ];

// console.log(arr[0].matchingArticles)

// let data = [{ asd: 'asda' }]

// const [out] = data
// console.log(out, '<<<out ')

// const requiredString = arr[0].matchingArticles.reduce((a, c) => {
//   a.push(c)
//   return a
// },[])
// console.log(Math.min(-10,-1), '<<<')

// const arr = [
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ];
// const transpose = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log('i :',i)
//     for (let j = 0; j < i; j++) {
//     console.log('j :',j)
//         const tmp = arr[i][j];
//         arr[i][j] = arr[j][i];
//         arr[j][i] = tmp;
//      };
//   }
// }
// transpose(arr);
// console.log(arr);

// var matrixExample = [
//   [ 1, 2, 3, 4 ],
//   [ 4, 5, 6, 5 ],
//   [ 7, 8, 9, 7 ],
//   [ 7, 8, 9, 7 ]
// ];

// function sumUpDiagonals(matrix) {
//  var sumDiagonals = {main: 0, second: 0},
//    matrixLength = matrix.length;

//  for (var i = 0; i < matrixLength; i++) {
//    sumDiagonals.main += matrix[i][i];
//    sumDiagonals.second += matrix[i][matrixLength-i-1];
//  }
//  return sumDiagonals[main]-sumDiagonals[second]
// }

// console.log(sumUpDiagonals(matrixExample))
// // function names() {
// //   const argumentsArray = [...arguments];

// //   let data = argumentsArray.map((name) => `hi ${name}`);
// //   console.log(data, "<<");
// //   //  ['hi samantha', 'hi sam']
// // }

// names("samantha", "sam");
// async function reduceAndPromise() {
//   return [{
//     x: 1,
//   }, {
//     x: 2,
//   }, {
//     x: 3,
//   }]
//     .reduce(async (prev, currentValue) => {
//       const acc = await prev;
//       console.log('acc', acc, 'currentValue', currentValue);
//       await anotherPromise(acc);
//       return acc + currentValue.x;
//     }, 0);
// }

// async function start() {
//     const result = await reduceAndPromise();
//       console.log('result', result);
//     return result;
//   }

// start();

//  const regex =   /(\w).*+/ig  ///^.{0,8}/

// const b = 'MICHELIN PILOT ROAD 4 SCOOTER - Motorbike Tire | MICHELIN USA';
// const a= 'Introducing the MICHELIN® MICHELIN PILOT ROAD 4 SCOOTER Motorbike tires. Designed for long lasting performance, explore the features and advantages of the MICHELIN PILOT ROAD 4 SCOOTER tires offer!'
// const str1='MICHELIN'
// const regex=/\b(?:MICHELIN\W+(?:\w+\W+){0,2}?MICHELIN®|MICHELIN®\W+(?:\w+\W+){0,2}?MICHELIN)\b/

// const out = a.replace(regex, () =>  'MICHELIN®')
// console.log('out', out)

// const match = b.match(/\bMICHELIN/)
// console.log('match', match)

// function towerOfHanoi(n, s,  t,  d)
// {
//         if (n == 0)
//         {
//             return;
//         }
//         towerOfHanoi(n - 1, s, d, t);
//         console.log("Move disk " + n + " from rod " + s +
//         " to rod " + d);
//         towerOfHanoi(n - 1, t, s, d);
//     }

//     // Driver code
//     var n = 3; // Number of disks
// towerOfHanoi(n, 'A', 'B', 'C');

// function merge(arr, l, m, r) {
//     var n1 = m - l + 1;
//     var n2 = r - m;

//     // Create temp arrays
//     var L = new Array(n1);
//     var R = new Array(n2);

//     // Copy data to temp arrays L[] and R[]
//     for (var i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (var j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];

//     // Merge the temp arrays back into arr[l..r]

//     // Initial index of first subarray
//     var i = 0;

//     // Initial index of second subarray
//     var j = 0;

//     // Initial index of merged subarray
//     var k = l;

//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i];
//             i++;
//         } else {
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }

//     // Copy the remaining elements of
//     // L[], if there are any
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }

//     // Copy the remaining elements of
//     // R[], if there are any
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
// function mergeSort(arr, l, r) {
//     if (l >= r) {
//         return; //returns recursively
//     }
//     var m = l + parseInt((r - l) / 2);
//     mergeSort(arr, l, m);
//     mergeSort(arr, m + 1, r);
//     merge(arr, l, m, r);
// }

// UTILITY FUNCTIONS
// Function to print an array
// function printArray(A, size) {
//     for (var i = 0; i < size; i++) {

//     }
//     // console.log(A[i])
// }

// var arr = [ 12, 11, 13, 5, 6, 7 ];
// var arr_size = arr.length;

// printArray(arr, arr_size);

// mergeSort(arr, 0, arr_size - 1);

// printArray(arr, arr_size);

// let num = 0;
// function grayCode(a) {
//   let res = []
//   computeGrayCode(res, a);
//   return res;
// }
//     function computeGrayCode( res,a){
//         if(a == 0) {
//             res.push(num);
//             return;
//         }
//         computeGrayCode(res, a-1);
//         num = num ^ (1<<(a-1));
//         computeGrayCode(res, a-1);
// }

// console.log(grayCode(2))
