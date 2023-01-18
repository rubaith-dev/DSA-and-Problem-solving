// Move zeros to the end

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Solution Approach:

// Step 1 -> Initialize a variable to keep track of the position where non-zero elements should be inserted (insertPos).
// Step 2 -> Iterate through each element in the array using a loop.
// Step 3 -> Check if the current element is not equal to zero.
//     Step 3.1 -> If the current element is non-zero:
//         Step 3.1.1 -> Move the element to the insertPos position in the array.
//         Step 3.1.2 -> Increment the insertPos by 1 to prepare for the next non-zero element.
// Step 4 -> After the loop, there might be remaining positions in the array from insertPos to the end. Fill these positions with zeros to move all zeros to the end of the array.
// Step 5 -> The array should now have all the zeros at the end while maintaining the relative order of the non-zero elements.


function moveZeroes(nums) {
    let insertPosition = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!== 0){
            nums[insertPosition] = nums[i];
            insertPosition++
        }
    }

    while(insertPosition<nums.length){
        nums[insertPosition] = 0;
        insertPosition++
    }

    return nums
}

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,12,0,0,0,0,12]))
console.log(moveZeroes([0]))




var pivotIndex = function(nums) {
    let totalSum = 0, leftWeight = 0;
    nums.forEach((num)=> totalSum += num)
  
    if(totalSum - nums[0] === 0) {
      return 0
    }
  
    if(totalSum - nums[nums.length - 1] === 0) {
      return nums.length - 1
    }
  
    for(let i=0; i<nums.length; i++){
      let pivotIndex = i+1;
      leftWeight += nums[i]
      if((totalSum - leftWeight - nums[pivotIndex]) === leftWeight){
        return pivotIndex
      }
      console.log(totalSum - leftWeight - nums[pivotIndex])
  }
  
  return -1
    
  
  };

