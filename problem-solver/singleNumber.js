// Problem: Single Number (XOR approach)
function singleNumber(A) {
  var out = BigInt(0);
  for (let a of A) {
    out ^= BigInt(a);
  }
  return out;
}

module.exports = { singleNumber };