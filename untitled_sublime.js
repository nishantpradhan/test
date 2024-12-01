// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from App Engine!');
// });

// // Listen to the App Engine-specified port, or 8080 otherwise
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}...`);
// });

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//   stdin_input += input; // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//   main(stdin_input);
// });

// function main(input) {
//   let inputParams = input.split('\n').filter(item=>item!='')
//   let start = 1
//   let count = Math.floor(inputParams.length / 2)

//   while (count) {
//     let si = start
//     let ei = start + 2
//     compute(inputParams.slice(si, ei))
//     start = ei
//     count--
//   }
// }

// function compute(input) {
//   const [N, K] = input[0].trim().split(' ').map(item => Number(item))
//   let arrayInQuestion = input[1].trim().split(' ').map(item => Number(item))

//   let sum = arrayInQuestion.reduce((a,v)=>a+v,0)
//   let p=sum/(K+1)
//    p++
//    process.stdout.write( parseInt(Math.max(0,p-N)) + "\n");
// }

// let arrtoSort = [1, 4, 2, 2, 1]
// const distAllowLimit = arrtoSort.length
// let sum = 0
// const allowDistinct = new Set()
// arrtoSort.sort((x, y) => {
//   if (x > y) {
//     return -1
//   } else if (x < y) {
//     return 1
//   }
//   return 0
// })
// for (let i of arrtoSort) {
//   if (!distAllowLimit) {
//     break
//   }
//   allowDistinct.add(i)
//   sum += i
//   if (allowDistinct.size == distAllowLimit) {
//     break
//   }
// }
// console.log('sum :', sum)
function convertToSuperscript(text) {
  const replacements = [
      { pattern: /\[([^\]]*)\]/g, replace: (match, p1) => `<sup>[${p1}]</sup>}` },
      { pattern: /\((?:\w-\w|\w)\)/g, replace: (match) => `<sup>${match}</sup>` }
  ];

  return replacements.reduce((acc, { pattern, replace }) => acc.replace(pattern, replace), text);
}

const text = "test test(1) 111 data(2)…(5)kkkk(1-2) PP (111)(3MPFS) [1-2]test[1-2-3]test";

console.log(convertToSuperscript(text),'adasdsa')
