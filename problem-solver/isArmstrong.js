/*
Problem: Armstrong number
Given a number, check if it is an Armstrong number (sum of cubes of its digits equals the number).
*/

function isArmstrong(no) {
  let sum = 0;
  let temp=no;
  while (temp > 0) {
   let  remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
  }
  return sum == no || no == 1;
}

module.exports = { isArmstrong };