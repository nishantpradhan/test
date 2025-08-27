// Problem: Modular exponentiation
function power(A, B, C) {
  if(B == 0) return 1 % C;
  let ans = 1n , base = BigInt(A), c1 = BigInt(C);
  while( B > 0) {
      if( B % 2 == 1) {
          ans = (ans * base) % c1;
          B--;
      }
      else {
          base = (base * base) % c1;
          B=B>>1;
      }
  }
  if( ans < 0) ans = (ans + c1) % c1;
  return Number(ans);
}

module.exports = { power };