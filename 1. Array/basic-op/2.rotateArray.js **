// 🔍 Problem 3: Array Rotation

// Rotations in the array is defined as the process of rearranging the elements in an array by shifting each element to a new position. This is mostly done by rotating the elements of the array clockwise or counterclockwise.

// For example see the following array:
// arr = [1, 2, 3, 4, 5, 6] and k = 2
// If do the left shift of d value, The rotated array will be [3, 4, 5, 6, 1, 2]
// If do the right shift of d value, the rotated array will be [5 , 6, 1, 2, 3, 4]

// 🏆 Solution Approach -
// If observed closely, we can see that a group of array elements is changing its position.

// For example see the following array:
// arr[] = {1, 2, 3, 4, 5, 6} and k = 2 for left rotation. If we divide the array in two group from left side of the array, { 1, 2 } is one group and the other one is { 3, 4, 5, 6}.
// The rotated array is {3, 4, 5, 6, 1, 2}. The group having the first two elements is moving to the end of the array.

// So steps for left rotations are -
// 1. Reverse the first 'k’ elements // [2 , 1, 3, 4, 5, 6] (First two elements reversed)
// 2. Reverse last 'N-k' elements // [2, 1, 6, 5, 4, 3] (Last four elements reversed)
// 3. Now Reverse the whole array. // [3, 4, 5, 6, 1, 2] (produces our expected result of shifting elements left for 2 spaces)

// For d = "right" or right rotations and k=2, Lets divide the array in two group but this time from the right side of the array one group is { 5 , 6 } and other one is {1, 2, 3, 4 }.
// The rotated array is {5, 6, 1, 2, 3, 4}. The group having the last two elements is moving to the first of the array.

// So steps for right rotations are -
// 1. Reverse the first 'lastIndex - k’ elements // [4 , 3, 2, 1 , 5, 6] (First four elements reversed)
// 2. Reverse last 'N-k' elements // [4, 3, 2, 1, 6, 5 ] (Last two elements reversed)
// 3. Now Reverse the whole array. // [5, 6, 1, 2, 3, 4] (produces our expected result of shifting elements right for 2 spaces)

// One little edge case to keep in mind, If k is bigger than array length we need to do k= k%length to keep the k inside the array. If the array length is 5 and k is 7 then 7%5 will produce 2, So we will shift only 2 space which indicates the circular rotation of 7 spaces but it will shift 2 space from its original place. So doing 2 space shift is fine.

// and if we get k%length === 0 don't need to do the above steps we can simply return the array as it is because doing rotation won't do any changes. It will save us a lot of time in case of bigger inputs.

// Time Complexity - O(n)
// Space - O(1)
            



function rotateArray(arr, d, k) {
  let length = arr.length,
    lastIndex = length - 1;

  if (k > length) {
    k = k % length;
    if(k===0){
        return arr
    }
  }
  if (d === "left") {
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, lastIndex);
    reverseArray(arr, 0, lastIndex);
  } else if (d === "right") {
    reverseArray(arr, 0, lastIndex - k);
    reverseArray(arr, length - k, lastIndex);
    reverseArray(arr, 0, lastIndex);
  }

  return arr
}

function reverseArray(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  
    return arr;
  }

console.log(rotateArray([1, 2, 3, 4, 5, 6 ], "right", 2));
