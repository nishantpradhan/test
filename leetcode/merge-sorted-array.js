
/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

var merge = function (nums1, m, nums2, n) {
  let index = 0;
  let newNums1 = [...nums1.splice(0,m)]

  //Merge
  while (newNums1.length > 0 || nums2.length > 0) {
      if (newNums1.length === 0) {
          nums1[index] = nums2.shift()
      } else if (nums2.length === 0) {
          nums1[index] = newNums1.shift()
      } else {
          if (newNums1[0] < nums2[0]) {
              nums1[index] = newNums1.shift()
          } else {
              nums1[index] = nums2.shift()
          }
      }
      
      index += 1
  }
};

/*
#leetcode / remove - duplicates - from - sorted - array - ii.js

80. Remove Duplicates from Sorted Array II
Medium
Topics
Companies
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

// function removeDuplicates(nums) {
//     if (nums.length <= 2) return nums.length;

//     let i = 2; // Start from the third element
//     for (let j = 2; j < nums.length; j++) {
//         if (nums[j] !== nums[i - 2]) {
//             nums[i] = nums[j];
//             i++;
//         }
//     }
//     return i;
// }

// let nums = [1, 1, 1];
// let k = removeDuplicates(nums);
// console.log(k); // Output: 5
// console.log(nums.slice(0, k)); // Output: [1, 1, 2, 2, 3]


/*
169. Majority Element
Easy
Topics
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

function majorityElement(nums) {
    let candidate = null;
    let count = 0;
    
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
}
let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));  // Output: 2


// [1, 2, 3, 4, 5, 6, 7];

// [7, 6, 5, 4, 3, 2, 1];

// k = 3
    
// [5, 6, 7, 4, 3, 2, 1];

// [5, 6, 7, 1, 2, 3, 4];