/*
Problem: Nearest Smaller Element
Given an array, for each element, find the nearest smaller element to its left.
*/

function prevSmaller(A) {
  class Stack {
    constructor() {
      this.item = [];
    }
    push(elem) {
      this.item.push(elem);
    }
    pop() {
      return this.item.pop();
    }
    isEmpty() {
      return (this.item.length === 0);
    }
    top() {
      return this.item[this.item.length - 1];
    }
  }
  let stack = new Stack();
  let n = A.length;
  let ans = [];
  let index = 0;
  while (index < n) {
    if (stack.isEmpty()) {
      stack.push(A[index]);
      ans.push(-1);
      index++;
      continue;
    }
    const stackTop = stack.top();
    if (stackTop >= A[index]) {
      stack.pop();
    } else {
      stack.push(A[index]);
      ans.push(stackTop);
      index++;
    }
  }
  return ans;
}

module.exports = { prevSmaller };