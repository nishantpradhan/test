// Problem: Sum of digits until single digit
function sumOfNums(A) {
    if (A % 10 == A) {
        return A;
    }
    return sumOfNums(Math.floor(A/10)) + A%10;
}

function solve(A) {
    if (A % 10 == A) {
        if (A == 1) {
            return 1;
        } else {
            return 0;
        }
    }
    return solve(sumOfNums(A));
}

module.exports = { sumOfNums, solve };