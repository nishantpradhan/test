// Problem: Add Binary Strings
function addBinaryString(A, B) {
  let max_len = Math.max(A.length,B.length);
  let carry = 0;
  let result = "";
  for(let i =0;i<max_len;i++){
    let p = i < A.length ? A.charAt(A.length - 1 - i) - '0' : 0;
    let q = i < B.length ? B.charAt(B.length - 1 - i) - '0' : 0;
    let sum = Number(p) + Number(q) + Number(carry);
    carry = parseInt(sum / 2);
    result = sum % 2 + result;
  }
  return (carry == 0) ? result : "1" + result;
}

module.exports = { addBinaryString };