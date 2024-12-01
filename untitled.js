var _ = require("lodash");

/*
 Maximize the sum
 You are given an array  of  integers. You want to choose some integers from the array subject to the condition that the number of distinct integers chosen should not exceed . Your task is to maximize the sum of chosen numbers. 

You are given  test cases.

Input format

The first line contains a single integer  denoting the number of test cases.
The first line of each test case contains two space-separated integers  and  denoting the length of the array and the maximum number of distinct integers you can choose.
The second line of each test case contains  space-separated integers denoting the integer array .
Output format

For each test case(in a separate line), print the maximum sum you can obtain by choosing some elements such that the number of distinct integers chosen is at most . If you cannot choose any element, output .
  let data = `4
 10 4
 5 5 10 8 -1 16 -3 14 -10 -10
 10 4
 9 9 10 12 1 0 9 20 17 -3
 10 3
 -9 20 -3 1 6 7 9 6 -9 11
 8 4
-3 3 -8 8 3 -3 7 -4`

 let inputParams = data.split('\n')
 let start = 1
 let lineCount = 1
 let count = Math.floor(inputParams.length / 2)
 while (count) {
     let si = start
     let ei = start + 2
     compute(inputParams.slice(si, ei), lineCount)
     start = ei
     count--
     lineCount++
 }

 function compute(input, lineCount) {
     const [N, K] = input[0].trim().split(' ').map(item => Number(item))
     let arrayInQuestion = input[1].trim().split(' ').map(item => Number(item))

     let sum = 0
     const mapper = {}
     arrayInQuestion.forEach(item => {
         if (!mapper[item]) {
             mapper[item] = item
         } else {
             let existingVal = mapper[item]
             mapper[item] = item + existingVal
         }
     })

     arrayInQuestion = Object.values(mapper)
         .sort((a, b) => b - a)

     for (let i = 0; i < K; i++) {
         if (arrayInQuestion[i] < 0) {
             break
         }
         sum += arrayInQuestion[i]
     }
 }

*/

//  let data = `10
//  10 9
//  16 18 19 18 17 16 19 16 20 17
//  6 9
//  20 17 16 15 17 15
//  10 11
//  20 20 18 16 18 20 18 20 18 16
//  8 10
//  18 20 18 19 16 15 16 16
//  10 8
//  15 16 16 17 15 15 16 17 18 18
//  8 11
//  16 19 18 16 19 20 20 20
//  9 11
//  20 20 16 16 15 20 17 17 15
//  6 9
//  20 17 15 17 18 17
//  5 8
//  18 16 19 16 16
//  5 7
//  15 15 16 19 16`

// let inputParams = data.split('\n')
// let start = 1
// let lineCount = 1
// let count = Math.floor(inputParams.length / 2)
// while (count) {
//     let si = start
//     let ei = start + 2
//     compute(inputParams.slice(si, ei), lineCount)
//     start = ei
//     count--
//     lineCount++
// }

// function compute(input, lineCount) {
//     const [N, K] = input[0].trim().split(' ').map(item => Number(item))
//     let arrayInQuestion = input[1].trim().split(' ').map(item => Number(item))

//     let sum = arrayInQuestion.reduce((a,v)=>a+v,0)
//     let p=sum/(K+1)
//      p++
//      console.log(Math.max(0,p-N))
// }


// let returnSlug = '';
// let path = 'asdd'
// const slug = docs.reduce((acc, item) => {
//     path = path.concat('/', item.displaySlug)
//     return path
// }, path)
// console.log('slug :', slug)
const toAppendWith = ['adv', 'fds']


const data = toAppendWith.concat(toAppendWith.map(item => item + '-draft'))

console.log(data, 'data');