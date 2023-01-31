// Day 6 of #100daysofproblemsolving
// Problem Link - Problem: Squares of a Sorted Array

// 🔍 Problem: Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example:
// Input: nums = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]
// Explanation: The squared values of the numbers in the array are [16, 1, 0, 9, 100]. After sorting them in non-decreasing order, we get [0, 1, 9, 16, 100].

// 🏆 Solution Approach

// Step 1 -> Create an empty array result with the same length as nums to store the squared values in the correct order.
// Step 2 -> Initialize three pointers: left pointing to the start of the nums array, right pointing to the end of the nums array, and index pointing to the last index of the result array.
// Step 3 -> Iterate through the nums array from right to left using the two-pointer approach.
// Step 4 -> At each step, compute the squares of the numbers at the left and right pointers using the ** operator.
// Step 5 -> Compare the squares: if the square at the left pointer is greater, store it in the result array at the index position and increment the left pointer. Otherwise, store the square at the right pointer in the result array and decrement the right pointer.
// Step 6 -> Repeat steps 4-5 until the left pointer crosses or becomes greater than the right pointer.
// Step 7 -> Finally, return the result array, which contains the squared values sorted in non-decreasing order.

// Time Complexity: The time complexity of the solution is O(n), where n is the length of the input array nums. This is because we iterate through the array once using the two-pointer approach.

// Space Complexity: The space complexity of the solution is O(n), where n is the length of the input array nums. This is because we create an additional array result to store the squared values.

// In summary, the time complexity of the code is O(n), and the space complexity is O(n).


var sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    let left = 0;
    let right = n - 1;
    let index = n - 1;
    
    while (left <= right) {
      const leftSquare = nums[left] ** 2;
      const rightSquare = nums[right] ** 2;
      if (leftSquare > rightSquare) {
        result[index] = leftSquare;
        left++;
      } else {
        result[index] = rightSquare;
        right--;
      }      
      index--;
    }
    
    return result;
  };

  process.nextTick(()=>{
    for(let i=0;i<10000000000;i++){
      console.log("process nextTick cb")
    }
    
  })

  Promise.resolve().then(()=>{
    console.log("promise cb")
  })