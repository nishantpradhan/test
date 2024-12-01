const _ = require("lodash");


let stack = [];
let Undefined = undefined
const A = [1, 2, 3]
console.log(A[stack[stack.length - 1]], '<<<', Undefined > A[0])



//Q1. Nearest Smaller Element

// function prevSmaller(A) {
//   class Stack {
//     constructor() {
//       this.item = [];
//     }
//     push(elem) {
//       this.item.push(elem);
//     }
//     pop() {
//       return this.item.pop();
//     }
//     isEmpty() {
//       return (this.item.length === 0) ? true : false;
//     }
//     top() {
//       return this.item[this.item.length - 1];
//     }
//   };


//   let stack = new Stack();
//   let n = A.length;
//   let ans = [];
//   let index = 0;

//   while (index < n) {
//     if (stack.isEmpty()) {
//       stack.push(A[index]);
//       ans.push(-1);
//       index++;
//       continue;
//     }

//     const stackTop = stack.top();
//     if (stackTop >= A[index]) {
//       stack.pop();
//     } else {
//       stack.push(A[index]);
//       ans.push(stackTop);
//       index++;
//     }
//   }

//   return ans;
// }
// console.log(prevSmaller())



// Stacks

//balanced parenthesis
//inserts all the opening parenthsis
// in case of closing parenthesis found , it pops the last parenthesis and compares
// in comparison when the  popped(should be opening parenthesis) and current parenthesis (should be closing parenthesis)
// should match using parenthesis map elements for closing parethesis i.e opening parenthesis of the popped element

// let A = "{([])}[[{}{}{}]][]]";

const returnValue = {
  '0': "not balanced",
  '1': "balanced",
};

// const isBalancedParenthesis = (A) => {
//   let map = {
//     "}": "{",
//     "]": "[",
//     ")": "(",
//   };

//   let stack = [];
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] == "(" || A[i] == "[" || A[i] == "{") {
//       stack.push(A[i]);
//     } else {
//       if (stack.length === 0) return returnValue['0'];
//       const popped = stack.pop();
//       if (popped != map[A[i]]) return returnValue['0'];
//     }
//   }

//   if (stack.length != 0) {
//     return 0;
//   }
//   return 1;
// };

// console.log(isBalancedParenthesis(A));



function areBracketsBalanced(expr) {

  // Using ArrayDeque is faster
  // than using Stack class
  let stack = [];

  // Traversing the Expression
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == '(' || x == '[' || x == '{') {

      // Push the element in the stack
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing. 
    // So stack cannot be empty at this point.
    if (stack.length == 0)
      return false;

    let check;
    switch (x) {
      case ')':
        check = stack.pop();
        if (check == '{' || check == '[')
          return false;
        break;

      case '}':
        check = stack.pop();
        if (check == '(' || check == '[')
          return false;
        break;

      case ']':
        check = stack.pop();
        if (check == '(' || check == '{')
          return false;
        break;
    }
  }

  // Check Empty Stack
  return (stack.length == 0);
}
// Driver code
let expr = "{{{[[[]]]";
console.log('areBracketsBalanced :', areBracketsBalanced(expr))




//Remove the first occurrence of the same consecutive characters.
// const A = "abccbccaddqqqrt";

// function doubleCharacterTrouble(A) {
//   let s = [A[0]];
//   for (let i = 1; i < A.length; i++) {
//     if (s[s.length - 1] !== A[i]) {
//       s.push(A[i]);
//     } else {
//       s.pop();
//     }
//   }
//   return s.join("");
// }
// console.log(doubleCharacterTrouble(A));

//eval RPN
// let A = ["2", "1", "+", "3", "*"];
// let A = ["4", "13", "5", "/", "+"];
// let A = ["-2", "-1", "2", "+", "-1", "-", "-", "2", "-2", "1", "-", "+", "-", "-2", "-2", "-", "-1", "2", "-2", "-", "-2", "-1", "+", "1", "1", "-", "-1", "+", "1", "*", "*", "2", "+", "*", "-", "-2", "1", "-2", "*", "+", "-2", "*", "1", "*", "-", "*", "*"];

// const evalRPN = () => {
//   let map = new Map();
//   map.set("+", (x, y) => x + y);
//   map.set("-", (x, y) => x - y);
//   map.set("*", (x, y) => x * y);
//   map.set("/", (x, y) => x / y);

//   let calculationStack = [];
//   for (let i = 0; i < A.length; i++) {
//     if (map.has(A[i])) {
//       let lastTwoValues = calculationStack.splice(calculationStack.length - 2);
//       let operator = map.get(A[i]);
//       let calcResult = operator(Number(lastTwoValues[0]), Number(lastTwoValues[1]));
//       calculationStack.push(calcResult);
//     } else {
//       calculationStack.push(A[i]);
//     }
//   }

//   return parseInt(calculationStack[0]);
// let ans = "";
// let stack = [];
// for (let i = 0; i < A.length; i++) {
//   if (!isNaN(A[i])) {
//     stack.push(A[i]);
//   } else {
//     let x = stack.pop();
//     let y = stack.pop();
//     let str = `${y}` + `${A[i]}` + `${x}`;
//     console.log("str :", str);
//     if (A[i] == "/") {
//       ans = Math.floor(y / x);
//     } else {
//       ans = eval(str);
//     }
//     stack.push(ans);
//   }
// }
// return parseInt(stack.pop());
// };
// console.log(evalRPN());