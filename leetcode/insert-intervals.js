/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let result = [];
  let i = 0;
  let n = intervals.length;

  // Add all intervals that are completely before newInterval
  while (i < n && intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
      i++;
  }

  // Merge all overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
  }
  result.push(newInterval);

  // Add all intervals that are completely after newInterval
  while (i < n) {
      result.push(intervals[i]);
      i++;
  }

  return result;
};

console.log(insert([[1,3],[6,9]], [2,5])); // Output: [[1,5],[6,9]]