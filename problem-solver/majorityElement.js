// Problem: Majority element in array
function majorityElement(A) {
  let cnt = 0, val = 0;
  for(let i = 0; i<A.length; i++) {
    if(val == A[i]) cnt++;
    else if(cnt == 0) {
      cnt++;
      val = A[i];
    } else cnt--;
  }
  return val;
}

module.exports = { majorityElement };