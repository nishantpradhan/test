/*
Problem: Print multiplication table
Given a number, print its multiplication table from 1 to 10.
*/

function printMultiple(number) {
  let result = [];
  for(let i=1;i<=10;i++){
    result.push(`${number} * ${i} = ${number*i}`);
  }
  return result;
}

module.exports = { printMultiple };