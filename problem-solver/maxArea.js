// Problem: Water Trapped (Container With Most Water)
function maxArea(A) {
    let i = 0, j = A.length - 1;
    let preWt = 0;
    while (i != j) {
        let wt = (j - i) * Math.min(A[i], A[j]);
        if (A[i] < A[j]) {
            i++;
        } else {
            j--;
        }
        if (wt > preWt) {
            preWt=wt
        }
    }
    return preWt;
}

module.exports = { maxArea };