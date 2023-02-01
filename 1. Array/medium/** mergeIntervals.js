// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// 🏆 Solution Approach:
// 1️⃣ Sort the intervals array in ascending order based on the start value of each interval.
// 2️⃣ Iterate through the intervals array to merge overlapping intervals.
// 3️⃣ Initialize a pointer i to keep track of the current interval being processed, starting from the first interval.
// 4️⃣ Inside the loop:
// - Assign the current interval to the variable current.
// - Assign the next interval to the variable next.
// - Check if there is an overlap between current and next intervals by comparing the end value of current with the start value of next.
// - If there is an overlap:Update the end value of current to the maximum of its current end value and the end value of next.
// - Remove the next interval from the intervals array using the splice() method.
// - Continue to the next iteration of the loop using continue to avoid incrementing the pointer i.
// - If there is no overlap, increment the pointer i to move to the next interval in the array.
// 5️⃣ After the loop completes, return the modified intervals array, which contains the merged intervals.

// Time Complexity:
// - Sorting the intervals array takes O(n log n) time, where n is the number of intervals. This is the dominant factor in the time complexity.
// - The loop iterates through the intervals array once, resulting in a linear time complexity of O(n).
// - Therefore, the overall time complexity of the code is O(n log n) due to the sorting step.

// Space Complexity:
// - The code uses a constant amount of extra space for variables like current, next, and the loop index i.
// - Sorting the intervals array is performed in-place, so it does not require additional space.
// - The code modifies the intervals array in-place without creating any significant additional data structures.
// - Thus, the space complexity of the code is O(1), indicating constant space usage.


var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for (let i = 0; i < intervals.length - 1; ) {
    current = intervals[i];
    next = intervals[i + 1];
    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
      intervals.splice(i + 1, 1);
      continue;
    }
    i++;
  }

  return intervals;
};
