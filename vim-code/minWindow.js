function minWindow(A, B) {
    if (A.length === 0 || B.length === 0) return "";

    const need = {};
    for (let char of B) {
        need[char] = (need[char] || 0) + 1;
    }
  console.log(need);

    let left = 0, right = 0;
    let minLen = Infinity, minStart = 0;
    let count = B.length;

    while (right < A.length) {
        const rightChar = A[right];
        if (need[rightChar] !== undefined) {
            if (need[rightChar] > 0) count--;
            need[rightChar]--;
        }
        right++;

    //     while (count === 0) {
    //         if (right - left < minLen) {
    //             minLen = right - left;
    //             minStart = left;
    //         }

    //         const leftChar = A[left];
    //         if (need[leftChar] !== undefined) {
    //             need[leftChar]++;
    //             if (need[leftChar] > 0) count++;
    //         }
    //         left++;
    //     }
    }

    return minLen === Infinity ? "" : A.substring(minStart, minStart + minLen);
}

const A = "ADOBECODEBANC"
const B = "ABC"

console.log(minWindow(A, B)); // Output: "BANC"