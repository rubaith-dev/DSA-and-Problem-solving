// 🔍 Problem 7: Majority Element

// Given an array nums, find the majority element, which is defined as the element that appears more than nums.length / 2 times in the array. If no majority element exists, return -1.

// Example:
// Input: nums = [2, 4, 5, 2, 2, 2, 6]
// Output: 2
// Explanation: The majority element is 2 because it appears 4 times, which is more than nums.length / 2.

// 🏆 Solution Approach

// Step 1 -> Create an empty hashmap using the Map data structure.
// Step 2 -> Calculate the threshold value, halfLength, by dividing the length of the array nums by 2 and taking the ceiling value.
// Step 3 -> Iterate through the array nums using a loop.
// Step 4 -> For each element num in nums, check if it already exists in the hashmap.
// Step 5 -> If num exists in the hashmap, increment its count by 1.
// Step 6 -> If num doesn't exist in the hashmap, set its count to 1.
// Step 7 -> Check if the count of num in the hashmap is greater than or equal to halfLength.
// Step 8 -> If the condition in step 7 is true, return num as the majority element.
// Step 9 -> If no majority element is found, return -1.

// Time Complexity: The time complexity of the solution is O(n), where n is the length of the input array nums. This is because we iterate through the array once using a single loop.

// Space Complexity: The space complexity of the solution is O(n), where n is the number of unique elements in nums. This is because we use the hashmap to store the count of each unique element



var majorityElement = function(nums) {
    let hashmap = new Map();
    const halfLength = Math.ceil(nums.length / 2);
    
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (hashmap.has(num)) {
        hashmap.set(num, hashmap.get(num) + 1);
      } else {
        hashmap.set(num, 1);
      }
      
      if (hashmap.get(num) >= halfLength) {
        return num;
      }
    }
  };