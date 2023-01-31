// Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.Merge nums1 and nums2 into a single array sorted in non-decreasing order.The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example: 
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Solution Approach

// step 1 -> Start with two arrays, nums1 and nums2, where nums1 has extra space to accommodate the merged result.
// step 2 -> keep a pointer at the the b= n-1 position of nums2 array and keep another pointer at a= m-1 position and work backwards.
// step 3 -> Add a pointer  at the end of nums1 array named i
// step 4 -> Start compare the elements at the current positions in both arrays.
// step 5 -> If the element in nums1 is greater than the element in nums2, place that element at the end of the merged array (at the current position) and move to the previous element in nums1.
// step 6 -> If the element in nums1 is not greater than the element in nums2, place the element from nums2 at the end of the merged array (at the current position) and move to the previous element in nums2.
// step 7 -> Repeat steps 3-5 until all elements from both arrays have been merged.


// The result is a merged array with all the elements sorted in ascending order.
// In summary, the code merges two sorted arrays, nums1 and nums2, into one sorted array by comparing the elements from the end of both arrays and placing them in the merged array in a sorted manner. It starts from the end to utilize the extra space in nums1 and avoids overwriting any elements.


var merge = function(nums1, m, nums2, n) {
    let a= m-1, b= n-1, i = m+n-1;
    while(b>=0){
        if(nums1[a]>nums2[b]){
            nums1[i]= nums1[a]
            a--;
            i--
        }

        else{
            nums1[i] = nums2[b]
            b--
            i--
        }
    }
};