/*
Problem: Evaluate Reverse Polish Notation (RPN)
Given an array of tokens representing an RPN expression, evaluate its value.
*/

function evalRPN(A) {
  let map = new Map();
  map.set("+", (x, y) => x + y);
  map.set("-", (x, y) => x - y);
  map.set("*", (x, y) => x * y);
  map.set("/", (x, y) => x / y);
  let calculationStack = [];
  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      let lastTwoValues = calculationStack.splice(calculationStack.length - 2);
      let operator = map.get(A[i]);
      let calcResult = operator(Number(lastTwoValues[0]), Number(lastTwoValues[1]));
      calculationStack.push(calcResult);
    } else {
      calculationStack.push(A[i]);
    }
  }
  return parseInt(calculationStack[0]);
}

module.exports = { evalRPN };