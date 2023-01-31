// 🔍 Problem 6: Running Sum of 1D Array

// Given an array nums, return the running sum of its elements. The running sum of an array is calculated as the cumulative sum of elements from left to right.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: The running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// 🏆 Solution Approach


// Step 1 -> Iterate through each element in the array using a loop.
// Step 2 -> Add the current element to the previous value and store it to the current index.


// Time Complexity: The time complexity of the solution is O(n), where n is the length of the input array nums. This is because we iterate through the array once using a single loop.
// Space Complexity: The space complexity of the solution is O(1) because we perform the modifications in-place, without using any additional data structures that scale with the input size. We only use a constant amount of extra space to store the sum variable.
// In summary, the time complexity of the code is O(n), and the space complexity is O(1).



var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i]=nums[i-1]+nums[i]
    }

    return nums
};