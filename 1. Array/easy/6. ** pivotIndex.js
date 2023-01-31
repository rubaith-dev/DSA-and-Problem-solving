// 🔍 Problem 7: Pivot Index in an Array

// Given an array nums, find the pivot index where the sum of numbers to the left of the index is equal to the sum of numbers to the right of the index. If no such index exists, return -1.
// Example:
// Input: nums = [1, 7, 3, 6, 5, 6]
// Output: 3
// Explanation: The pivot index is 3, because the sum of numbers to the left of index 3 (1+7+3 = 11) is equal to the sum of numbers to the right of index 3 (5+6 = 11).

// 🏆 Solution Approach

// Step 1 -> Initialize variables totalSum and leftWeight to 0.
// Step 2 -> Calculate the total sum of all numbers in the array by iterating through it using a loop.
// Step 3 -> Iterate through the array using a loop.
// Step 4 -> Check if the sum of numbers to the left of the current index is equal to the sum of numbers to the right of the current index.
// Step 5 -> If the sums are equal, return the current index as the pivot index.
// Step 6 -> Otherwise, update the leftWeight by adding the current number to it.
// Step 7 -> Repeat steps 4-6 for each element in the array.
// Step 8 -> If no pivot index is found, return -1.

// Time Complexity: The time complexity of the solution is O(n), where n is the length of the input array nums. This is because we iterate through the array once using a single loop.

// Space Complexity: The space complexity of the solution is O(1) because we only use a constant amount of extra space to store the sum variables.
// In summary, the time complexity of the code is O(n), and the space complexity is O(1).

const pivotIndex = function(nums) {
    let totalSum = 0;
    nums.forEach((num) => totalSum += num);
  
    let leftWeight = 0;
    for (let i = 0; i < nums.length; i++) {
      if (leftWeight === totalSum - leftWeight - nums[i]) {
        return i;
      }
      leftWeight += nums[i];
    }
  
    return -1;
  };

  console.log(pivotIndex([1,7,3,6,5,6]))
  console.log(pivotIndex([1,2,3]))
  console.log(pivotIndex([2,1,-1]))