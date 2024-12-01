


//water trapped
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


// function findDiffCount(A, B) {
//   let N = A.length;
//   let count = 0,
//       i = 0,
//       j = 1;
//   A = A.sort((a, b) => a - b)
//   let p2 = -1,
//       p1 = -1;
//   while (j < N) {
//       let diff = Math.abs(A[j] - A[i]);
//       if (diff == B) {
//           if (p1 != A[i] && p2 != A[j]) {
//               count++;
//               p1 = A[i];
//               p2 = A[j];
//           }

//           i++;
//           j++;
//       } else if (diff > B) {
//           i++;
//           if (i == j) {
//               j++;
//           }
//       } else {
//           j++;
//       }
//   }
//   return count;
// }

// let A = [ 3, 3, 2, 7, 9, 6, 8, 7, 2, 9, 10, 3, 8, 10, 6, 5, 4, 2, 3];
// let B = 3;
// console.log(findDiffCount(A, B), '<<<')

// let A = ;
// let B = 5;
// function minSubArrSum(A, B) {
//   let n = A.length;
//   let l = 0, r = 0;
//   let sum = A[l];
//   while (r < n && l <= r) {
//       if (sum == B) {
//           return A.slice(l, r + 1);
//       } else if (sum < B) {
//           r++;
//           if (r < n) {
//               sum += A[r];
//           }
//       } else {
//           sum -= A[l];
//           l++;
//           if (l > r && l < n - 1) {
//               r++;
//               sum += A[r];
//           }
//       }
//   }
//   return [-1];
// }

// console.log(minSubArrSum([1, 2, 3, 4, 5],5))
// function msubarr(arr, l ,r) {
//   let sum = 0;
//   for (let i = l; i < r; i++){
//     sum+=arr[i]
//   }
//   return sum
// }

//implement power function 

// function power (base, exponent) {
    
//   if (exponent < 0) {
//     throw new Error ('Negative expoenents are not acceted');
//   }
  
//   var result = 1;
  
//   while (exponent) {
//       if ((exponent & 1) === 1) {
//           result *= base;
//       }
//       exponent = exponent >> 1;
//       base *= base;
//   }
//     return result;
// }


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


// function power(A, B, C) {
//   if(B == 0) return 1 % C;
//   let ans = 1n , base = BigInt(A), c1 = BigInt(C);
  
//   while( B > 0) {
      
//       if( B % 2 == 1) {
//           ans = (ans * base) % c1;
//           B--;
//       }
//       else {
          
//           base = (base * base) % c1;
//           B=B>>1;
//       }
      
//   }
//   if( ans < 0) ans = (ans + c1) % c1;
//   return Number(ans);
// }



// console.log(power(-1,1,20),'<<<<')


// console.log(parseInt(1 / 2, 10),'<<<')

// function power(x, y) {  
//     var temp;
//     if( y == 0)
//         return 1;
//     temp = power(x, y / 2);
//     if (y % 2 == 0)
//         return temp*temp;
//     else
//         return x*temp*temp;
// power(number,power)
  // let total = 1;
  // while(power > 0){
  //   total *= number;
  //   power--;
  // }
  // return total;
// }

// console.log(power(-1,1)%20,'<<<<<<')

//longest palindrome


// const palindrome = function (A) {
//   let max = 0
//   let x = -1
//   let y = -1
//   for (let i = 0; i < A.length; i++) {
//     let [k, l] = expandCentre(A, i, i) //get the   lowest and highest indexes
//     if (l - k + 1 > max) { //get the max length by computation and store in max
//       max = l - k + 1
//       x = k
//       y = l
//     }
//   }
//   for (let i = 0; i < A.length - 1; i++) {
//     let [k, l] = expandCentre(A, i, i + 1)
//     if (l - k + 1 > max) {
//       max = l - k + 1
//       x = k
//       y = l
//     }
//   }
//   return A.substring(x, y + 1)
// }

// const expandCentre = function (A, i, j) {
//   while (i >= 0 && j < A.length && A[i] == A[j]) {
//     i--
//     j++
//   }
//   return [i + 1, j - 1]
// }

// console.log(palindrome('aabbaaaa'))
// 



// const testpalindrome = (A) => {
//   let n = A.length;
//   let rtrn = "";
//   for (let i = 0; i < n; i++) {
//     let tempMax1 = (expand(A, i, i));
//     let tempMax2 = (expand(A, i, i + 1));
//     if (rtrn.length < tempMax1.length || rtrn.length < tempMax2.length)
//       rtrn = (tempMax1.length < tempMax2.length) ? tempMax2 : tempMax1;
//   }
//   return rtrn;
// }

// const expand = (s, i, j) => {
//   const N = s.length;
//   while (i >= 0 && j < N && s.charAt(i) == s.charAt(j)) {
//     i--;
//     j++;
//   }
//   return s.substring(i + 1, j);
// }

// console.log(testpalindrome("tetete"))
// function solution(A) {
//   // write your code in JavaScript (Node.js 6.4.0)

//      var missing = 1;
//      // sort the array.
//      A.sort(function(a, b) { return a-b });

//      // try to find the 1 in sorted array if there is no 1 so answer is 1
//      if ( A.indexOf(1) == -1) { return 1; }

//      // just search positive numbers to find missing number 
//      for ( var i = A.indexOf(1); i < A.length; i++) {
//         if ( A[i] != missing) {
//           missing++;
//           if ( A[i] != missing ) { return missing; }
//         }
//      }

//      // if cant find any missing number return next integer number
//      return missing + 1;
//   }

// let arr = [ 1, 2,3,  5, 6 ];
// console.log(solution(arr))
// function missingInteger(nums) {
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   let ans = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == ans) ans++;
//   }
//   return ans;
// }
// let arr = [1, 2, 3, 5, 6];
// console.log(missingInteger(arr))

// function getMissingNo(a, n) {

//   let total = Math.floor((n + 1) * (n + 2) / 2);
//   for (let i = 0; i < n; i++){
//     total -= a[i];
//   }
//   return total;
// }

// // Driver Code

// let arr = [ 1, 2,3,  5, 6 ];
// let n = arr.length;
// let miss = getMissingNo(arr, n);
// console.log(miss,'<<<<<')



// const Solution = (A) => {
//   let waysToCut = 0;
//   if (isAsthetic(A)) {
//     return 0;
//   }

//   for (let i = 0; i < A.length; i++) {
//     let temp = [...A]; //making copy of [A] using spread operator (...) to prevent the actual array modifications
//     temp.splice(i, 1);
//     console.log(temp,'temp')
//     if (isAsthetic(temp)) {
//       waysToCut += 1;
//     }
//   }

//   if (waysToCut === 0) {
//     return -1;
//   }
//   return waysToCut;
// };

// const isAsthetic = (a) => {
//   for (let i = 1; i < a.length; i++) {
//     if (
//       (a[i] >= a[i - 1] && a[i] <= a[i + 1]) ||
//       (a[i] <= a[i - 1] && a[i] >= a[i + 1])
//     ) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(Solution([3, 4, 5, 3, 7]))


// Q1. Help From Sam
// let A = 5;
//   let count = 0;
//   for(let i = 0; i<30 ;i++)
//   {
//     let a = (A & (1 << i))
//     console.log('a :',a,'i :',i)
//       if(a >0)
//       {
//           count++;
//       }
//   }
//    console.log(count,'<<<<<')



// let i = 1;
// i = i << 1;
// i = i << 2;
// console.log(i)
// let A = 5;
// let goodDays=0;
// while(A>0){
// A=A&(A-1);
// goodDays++;
// }
// console.log(goodDays,'goodDays');


// let maj1 = a[0];
// let maj2 = 0;
// let c1 = 1;
// let c2 = 0;

// for (let i = 1; i < a.Count; i++) {
//   if (a[i] != maj1 && maj2 == 0) {
//     maj2 = a[i];
//     c2++;
//   } else if (a[i] == maj1) {
//     c1++;
//   } else if (a[i] == maj2) {
//     c2++;
//   } else if (a[i] != maj1 && a[i] != maj2) {
//     if (c1 == 0) {
//       maj1 = a[i];
//       c1++;
//     } else if (c2 == 0) {
//       maj2 = a[i];
//       c2++;
//     } else {
//       c2--;
//       c1--;
//     }

//   }
// }

// c1 = 0;
// c2 = 0;
// for (let j = 0; j < a.Count; j++) {
//   if (a[j] == maj1)
//     c1++;
//   if (a[j] == maj2)
//     c2++;
// }
// if (c1 > a.Count / 3) {
//   return maj1;
// }
// else if (c2 > a.Count / 3) {
//   return maj2;
// }
// else {
//   return -1;
// }


//majority element

// let A = [12, 12, 2, 2, 2, 2, 21, 1, 1];
// let A = [12];

// let votes = 0;
// let me = {};
// for (let i = 0; i < A.length; i++) {
//   if (me[A[i]]) {
//     me[A[i]]+=1
//   } else {
//     me[A[i]]=1
//     }
// }
// let max = 0;
// let ele=0
// for (let e in me) {
//   if (me[e] > max) {
//     max=me[e]
//     ele=e
//   }
// }

// console.log(ele,'maxele')
// for (let i = cntarr.length - 1; i >= 0; i--){

// }
// console.log('me',me)

// let cnt = 0, val = 0; // initialize count and value = 0

// for(let i = 0; i<A.length; i++)
// {
//     if(val == A[i]) // check is number is repeated
//     cnt++;
//     else if(cnt == 0) // check if count is zero hence need to assign new value
//     {
//         cnt++;
//         val = A[i];
//     }
//     else
//     cnt--;
// }
// console.log( 'val',val); // Return Directly , as it mention in question that number will be always available



//mod string
// let A = "43535321"
// let B = 47

// let num = 0,rem = 0;
// for(let i=0;i<A.length;i++){
// num = rem*10 + (A.charAt(i)-'0');
// rem = num%B;
// }
// let remainder = rem;


let r = '1222'
// console.log(r.charAt(3) - '0')

// function convertLetterToNumber(str) {
//   str = str.toUpperCase();
//   let out = 0, len = str.length;
//   for (let pos = 0; pos < len; pos++) {
//     const math = Math.pow(26, len - pos - 1)
//     console.log('math :',math, '<<<<<')
//     console.log('charCode :',str.charCodeAt(pos))
//     const charCode = str.charCodeAt(pos) - 64
//     out += charCode * math;
//     console.log('out :',out)
//   }
//   return out;
// }

// console.log(convertLetterToNumber('AB'))




// Q2. Add Binary Strings
// console.log(addBinaryString('100','11'))


// function addBinaryString(A, B) {
//    console.log(A.length,'<<<<')
//   let max_len = Math.max(A.length,B.length);

//   let carry = 0;

//   let result = "";

//   for(let i =0;i<max_len;i++){

//     let p = i < A.length ? A.charAt(A.length - 1 - i) - '0' : 0;

//     let q = i < B.length ? B.charAt(B.length - 1 - i) - '0' : 0;
//     console.log(p,q,'<<<')
//     let sum = Number(p) + Number(q) + Number(carry);
//     console.log(sum,'<<<sum')

//     carry = parseInt(sum / 2);   // dividing by 2 because base is 2
//     console.log(carry,'<<<carry')

//     result = sum % 2 + result;       // 2 refer here the base value
//   }

//   return (carry == 0) ? result : "1" + result;
// }


//Q1. Single Number

// Problem Description
// Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

// NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// let A = [1, 2, 2, 3, 3, 5, 5,1,5];
// var  out=BigInt(0);
// for (let a of A) {
//   out ^= BigInt(a)
//   // out = a;
// }
// console.log(out,'<<<<')



//Q4. Matrix Multiplication

// row 1 of A will multiple column 1 of B ,then row 1 * column 2 of B
// A = [[1, 2],
//      [3, 4]];

// B = [[5, 6],
//      [7, 8]];


// let out = [];

// for (let i = 0; i < A.length; i++) {
//   let inner = [];
//   for (let j = 0; j < B[0].length; j++) {
//     let sum = 0;
//     for (let k = 0; k < A[0].length; k++){
//       sum += A[i][k] * B[k][j];
//     }
//     inner.push(sum);
//   }
//   out.push(inner)
// }

// console.log(out,'<<<')
//transpose matrix

// let A = [
//   [1, 2, 3],
//   [4, 5, 6]
// ]; // [3,1][4,2]

//transpose==> [1,3 ],[2,4] ==> Reverse [3,1][4,2]

// let col = A[0].length;
// let row = A.length;

// for (let r = 0; r < row; r++){
//   for (let c = r+1; c < col; c++){
//     let temp = A[r][c];
//     A[r][c] = A[c][r];
//     A[c][r]=temp;
//   }
// }

// for (let i = 0; i < col; i++){
//   let l = 0; let h = row - 1;
//   while (l < h) {
//     let temp = A[i][l];
//     A[i][l] = A[i][h];
//     A[i][h] = temp
//     h--;
//     l++;
//   }
// }
// function transpose(matrix) {
//   const rows = matrix.length, cols = matrix[0].length;
//   const grid = [];
//   for (let j = 0; j < cols; j++) {
//     grid[j] =  Array(rows);
//   }
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       grid[j][i] = matrix[i][j];
//     }
//   }
//   return grid;
// }
// console.log(transpose(A))


// console.log(1 |0 | 1,'<<<OR')





//Q7. Spiral Order Matrix II
// let A = 1;

// console.log(Array.from(Array(A),()=>new Array(A)))





//Q6. Matrix Transpose
// let A =
//   [
//     [21, 62, 16, 44, 55, 100, 16, 86, 29],
//     [62, 72, 85, 35, 14, 1, 89, 15, 73],
//     [42, 44, 30, 56, 25, 52, 61, 23, 54],
//     [5, 35, 12, 35, 55, 74, 50, 50, 80],
//     [2, 65, 65, 82, 26, 36, 66, 60, 1],
//     [18, 1, 16, 91, 42, 11, 72, 97, 35],
//     [23, 57, 9, 28, 13, 44, 40, 47, 98]
//   ];
// let outarr = [];
// for (let i = 0; i < A[0].length; i++){
//   let inner = [];
//   for (let j = 0; j < A.length; j++){
//     inner.push(A[j][i])
//   }
//   outarr.push(inner)
// }
// console.log('outarr',outarr)



//Q5. Matrix Subtraction

// let A = [
//   [-5, 7],
//   [3, 1],
//   [4, -10]
// ];                

// B = [
//   [3, 4],
//   [2, 3],
//   [10, 1]
// ];

// let outarr = [];
// console.log(Array.from(Array(3), () => new Array(3)))

// for (let i = 0; i < A.length; i++){
//   let innersub = [];
//   for (let j = 0; j < A[0].length; j++){
//     let sub = 0;
//     sub = A[i][j] - B[i][j];
//     innersub.push(sub);
//   }
//   outarr.push(innersub);
// }

// console.log(outarr);




///column sum

// let A = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 2, 3, 4]
// ];

// let outarr = [];
// for (let i = 0; i < A[0].length; i++) {
//   let sum = 0;
//   for (let j = 0; j < A.length; j++) {
//     sum += A[j][i]
//   }
//   outarr.push(sum)
// }

// console.log(outarr)
//add the matrices

// let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let B = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];

// let outerarray = [];
// for (let i = 0; i < A.length; i++){
//   let innerSum = [];
//   for (let j = 0; j < A[i].length; j++){
//     let sum = 0;
//     sum += A[i][j] + B[i][j];
//     innerSum.push(sum)
//   }
//   outerarray.push(innerSum)
// }
// console.log('outerarray',outerarray)


//max sum
// let A = 5;
// let B = 7;
// let C = [ 3, 8, 8, 9, 7 ]
// function findMaxSum() {
//   let cloSum = 0;
//   for (let i = 0; i < A; i++) {
//     let sum = Number(0);
//     for (let j = i; j < A; j++) {
//       sum += Number(C[j])
//       if (sum <= B && cloSum < sum) {
//         cloSum = sum
//       }
//     }
//   }
//   return cloSum
// }
// console.log(findMaxSum())


//least subarray of size k 

// let a = [ 15, 7, 11, 7, 9, 8, 18, 1, 16, 18, 6, 1, 1, 4, 18 ]
// let b = 6;
// let currSum = 0;
// let n = a.length;
// let index = 0;
// for (let i = 0; i < b; i++){
//   currSum+=a[i]
// }
// let min = currSum;
// for (let i = 1; i < a.length-b; i++){
//   currSum = currSum - a[i - 1] + a[i + b - 1];
//   min = Math.min(currSum, min);
//   if (currSum < min) {
//     min = currSum;
//     index = i;
//   }
// }
// console.log('index',index)


// // //subaraysum
// let A = [1,5,6,8];
// let prf = [];
// let sum=BigInt(0);
// let n=A.length
// for (let i = 0; i < n; i++) {
//   const j=BigInt(i + 1) * BigInt(n - i);   // 1 * 4 , 2 * 3 ,3 * 2, 4 * 1  length of array in decreasing order
//   sum += BigInt(A[i]) * j       // a[i]*  1 * 4 , a[i] * 2 * 3 ..... so on 
// }
// console.log(sum)


// 16
// 11
// 14
// 7
//   41




//n row m column
// let arr = [[5, 432, 12, 3, 5],
//            [4, 1, 5, 4, 1],
//            [55, 421, 2, 3, 1]];

// let m = 5;
// let n = 3;
// for (let j = 0; j < m; j++){
//   x = j; i = 0;
//   while (x >= 0 && i < n) {

//     console.log(`${i}-${j}`,   arr[i][x]);
//     i++;
//     x--;
//   }
// }



// kth  rotations

// let a = [ 1, 2, 3, 4, 5 ]
// let b = 3;

// // a.shift();
// let nos = b % a.length;
// let delCount = a.length - b;
// let delEle = a.splice(delCount, nos);
// a.splice(0,0,...delEle)

//  console.log(a)
// if(b/a.length)


//Bulbs

// A = [0, 1, 0, 1]
// let state = 0;
// let cnt = 0;
// for (let i = 0; i < A.length; i++){
//   if (A[i] == state) {
//     cnt++;
//     state = 1 - state;
//   }
// }
// console.log(cnt)

// Q2. Closest MinMax

// let min = Number.MAX_SAFE_INTEGER;
// let max = Number.MIN_SAFE_INTEGER;
// // let A = [814, 761, 697, 483, 981];
// let A = [4,4,4,4];


// let  min_Index = -1, max_Index = -1;
// let min_ele = Number.MAX_SAFE_INTEGER;
// let max_ele = Number.MIN_SAFE_INTEGER;

// let ans = Number.MAX_SAFE_INTEGER;
// for (let i = 0; i < A.length;i++)
// {
//     min_ele = Math.min(min_ele, A[i]);
//     max_ele = Math.max(max_ele, A[i]);
// }

// for(let  i=0 ; i<A.length ; i++)
// {
//     if(A[i] == min_ele) min_Index = Math.max(min_Index, i);
//     if(A[i] == max_ele) max_Index = Math.max(max_Index, i);

//     if(min_Index != -1 && max_Index != -1)
//     {
//         let  len = Math.abs(max_Index - min_Index) + 1;
//         ans = Math.min(ans, len);
//     }
// }

// console.log(ans);


// for (let i = 0; i < A.length ; i++){
//   min = Math.min(min, A[i]);
//   max = Math.max(max, A[i]);
// }

// let ans = A.length;
// for (let i = 0; i < A.length; i++){
//   if (A[i] == min) {
//     for (let j = i + 1; j < A.length; j++){
//       if (A[j] == min) {
//         break;
//       }
//       if (A[j] == max) {
//         ans = Math.min(ans, j - i + 1)
//         break;
//       }
//     }
//   } else if (A[i]==max) {
//     for (let j = i + 1; j < A.length; j++){
//       if (A[j] == max) {
//         break;
//       }
//       if (A[j] == min) {
//         ans = Math.min(ans, j - i + 1)
//         break;
//       }
//     }
//   }
// }


//Q1. Special Subsequences "AG"

// A = "ABCGAG"
// let ans = 0;
// let cnt = 0;

// for (let i = A.length-1; i >=0; i--){
//   if (A[i] == 'G') {
//     ans += 1;
//   } else if (A[i]=='A') {
//       cnt+=ans
//   }
// }
// console.log(cnt)


//Q2. Good Pair

// A = [ 1, 2, 4 ]
// B = 4

// for (let i = 0; i < A.length-1; i++){
//   for (let j = i + 1; j < A.length; j++){
//     if (A[j] + A[i] == B && i!=j) {
//       console.log(1)
//     }
//   }
// }


//max and min in array 
// let arr=[5 ,1, 2, 3, 4, 5 ]

// let max=Number.MIN_SAFE_INTEGER
//     let min=Number.MAX_SAFE_INTEGER
//     let n=arr[0];
//     for(i=1;i<=n;i++){
//         min=Math.min(min,arr[i])
//         max=Math.max(max,arr[i])
//     }
//     console.log(max,min)


//Pick from both sides!

// let A = [-533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173, 961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421, -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297, 811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243, -963, -141, -277, 741, 529, -222, -684, 35];
// let  B = 48

// let cs = 0;
// let ms = 0;
// let n = B - 1;
// let sum = 0;
// //sum of first B elements
// for (let i = 0; i <= n; i++){
//   cs += A[i];
// }

// ms = cs;
// let i = B - 1;
// let j = A.length - 1;
// while (i >= 0) {
//   cs -= A[i--];
//   cs += A[j--];
//   ms = Math.max(cs, ms);
// }
// console.log(ms,'<<<')


//Range Sum Query

// A = [2, 2, 2]
// B = [[1, 1], [2, 3]]
// let prefA = [];
// let out = [];
// let sum = 0;
// for (let i = 0; i < A.length; i++){
//   sum += A[i];
//   prefA.push(sum)
// }
// //[2 4 6]
// for (let i = 0; i < B.length; i++){
//   let sum = 0;
//   let L = B[i][0]-1;
//   let R = B[i][1]-1;
//   if (L == 0) {
//     sum = prefA[R];
//   } else {
//     sum=prefA[R]-prefA[L]
//   }
//   out.push(sum)
// }


//Count ways to make sum of odd and even indexed elements equal by removing an array element
/** 
Removing any element from the given array makes even indices of succeeding elements as odd and odd indices of the succeeding elements as even. Follow the steps below to solve the problem:

 Initialize two variables, say evenSum and oddSum,

 to store the sum of odd-indexed and even-indexed elements of the given array respectively.

Traverse the array using variable i.

Remove every ith element of the array and update the sum of the remaining even-indexed elements 

and the odd-indexed elements based on the above observation. Check if the sums are equal or not. 

If found to be true, then increment the count.
Finally, print the count obtained.
*/
//           //0  1  2  3   4  5
// let arr = [ 1, 2, 3, 7, 1, 2, 3 ]

// let prefEven = []; 

// let prefOdd = []; 
// let sumeven = 0;
// let sumodd = 0;
// let n = arr.length;
// let cnt = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 ==0) {
//     sumeven += arr[i]
//   } else {
//     sumodd += arr[i]
//   }
//   prefEven.push(sumeven)
//   prefOdd.push(sumodd)
// }
// for (let i = 0; i < n; i++) {
//   if (i == 0) {
//     sumEven = prefOdd[n - 1] - prefOdd[i];
//     sumOdd = prefEven[n - 1] - prefEven[i];
//   } else {
//     sumEven = prefEven[i - 1] + (prefOdd[n - 1] - prefOdd[i]);
//     sumOdd = prefOdd[i - 1] + (prefEven[n - 1] - prefEven[i]);
//   }
//   if (sumEven == sumOdd) {
//      cnt++
//    }
// }


// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) {
//     peven[i]=peven[i-1]+arr[i]
//   } else {
//     peven[i]=peven[i-1]
//   }
// }


//equilibrium array

// let A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// // let A = [1, 2, 3, 7, 1, 2, 3]

// function solve() {
//   let index = -1;
//   let preSum = [];
//   let sum = 0;
//   let n = A.length;
//   let ls = 0;
//   for (let ele of A) {
//     sum += ele
//   }
//   console.log(sum, 'sum')
//   for (let i = 0; i < n; i++) {
//     sum = sum - A[i]
//     if (sum == ls) {
//       return i
//     }
//     ls += A[i]
//   }
//   return index
// }
// console.log(solve(), 'solve',2%3)


// 2nd approach
// let preSum = [];
// let sum = 0;
// for (let i = 0; i < A.length; i++) {
//   sum += A[i]
//   preSum.push(sum)
// }

// let equIndex = [];
// let n = A.length;
// for (let i = 0; i < n; i++) {
//   let left = 0;
//   if (i === 0) {
//     left = 0;
//   } else {
//     left = preSum[i - 1];
//   }
//   right = preSum[n - 1] - preSum[i]
//   if (left === right) {
//     equIndex.push(i)
//   }
// }
// console.log('equIndex :', equIndex);

// let min = Number.POSITIVE_INFINITY;
// for (let i = 0; i < equIndex.length; i++) {
//   min = Math.min(min, equIndex[i]);
// }
// console.log('min : ', min)




// let number = 200

// for (let i = 1; i <= 200; i++) {
//   findArmstring(i)
// }

// function findArmstring(no) {
//   let sum = 0
//   let temp=no
//   while (temp > 0) {
//    let  remainder = temp % 10
//     sum += remainder * remainder * remainder
//     temp = parseInt(temp / 10)
//   }
//   if (sum == no || no == 1) {
//     console.log('sum : ', sum)
//   }
// }


// process.stdin.on('data',data=>{
//   let number= (data+'').trim();
//   for(let i=1;i<=10;i++){
//       const result = i * number;
//   console.log(`%s * %s = %s`,number,i,result)
//   }
// })
// printMultiple(5)


// int A = 0, b = 0;    
// for (i = 0; i < N; i++) {
//     for (j = 0; j < N; j++) {
//         A = A + j;
//     }
// }
// for (k = 0; k < N; k++) {
//     b = b + k;
// } 

// O(N * N) time, O(1) space



// int count = 0;
//         for (int i = N; i > 0; i /= 2) {
//             for (int j = 0; j < i; j++) {
//                 count += 1;
//             }
// }

// O(N)
//find perfect square 
// function perfectSquare(d, n) {
//   let sum = 0;
//   for (let j = 1; j <= d; j++) {
//     if (d % j == 0) {
//       sum += j
//       if (sum == d) {
//         process.stdout.write('YES\n')
//         break;
//       }
//       if (sum > d) {
//         process.stdout.write('NO\n')
//         break;
//       }
//     }
//   }
// }

// var readline = require('readline');
// let loop;
// let i = 0;
// var rl = readline.createInterface(
//   process.stdin, process.stdout);
// rl.on('line', (input) => {
//   if (i == 0) {
//     loop = input
//   } else {
//     perfectSquare(input, loop)
//   }
//   i++
// });



// function isPrime(n){
//   let factor=0;
//   if(n==1){
//       return 'NO'
//   }
//   for(i=2;i<=n;i++){
//       if(n%i==0){
//        factor++
//       }
//     }
//     if(factor==1){
//         return 'YES'
//     }
//   return 'NO'
// }

//Prime numbers using square root  optimised

// function isPrime(n){
//   let factor=0;
//   if(n==1){
//       return 'NO'
//   }
//   for(i=2;i<=Math.sqrt(n);i++){
//       if(n%i==0){
//        factor++
//       }
//     }
//     if(factor==0){
//         return 'YES'
//     }
// }
//   return 'NO'
// console.log(isPrime(2))



//     return isPairFound;
// }