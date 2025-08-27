/*
Problem: Balanced Parenthesis
Given a string containing parentheses, check if they are balanced.
*/

function isBalancedParenthesis(A) {
  const returnValue = {
    '0': "not balanced",
    '1': "balanced",
  };
  let map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  let stack = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] == "(" || A[i] == "[" || A[i] == "{") {
      stack.push(A[i]);
    } else {
      if (stack.length === 0) return returnValue['0'];
      const popped = stack.pop();
      if (popped != map[A[i]]) return returnValue['0'];
    }
  }
  if (stack.length != 0) {
    return returnValue['0'];
  }
  return returnValue['1'];
}

module.exports = { isBalancedParenthesis };