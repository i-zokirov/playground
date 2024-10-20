/*
Coding Task: Remove Duplicates from an Array In-Place

Problem Statement: Given an array of integers nums, remove the duplicates in-place such that each element appears only once. 
The order of the elements can be rearranged, and you do not need to keep the elements sorted. 
The function should modify the input array directly and return the new length of the array after duplicates have been removed.

*/


function removeDuplicates(nums) {
    // Your code here
}


// Example 1:
const nums1 = [1, 1, 2];
const length1 = removeDuplicates(nums1);
console.log(length1); // Output: 2
console.log(nums1.slice(0, length1)); // Output: [1, 2]

// Example 2:
const nums2 = [3, 3, 0, 3, -1];
const length2 = removeDuplicates(nums2);
console.log(length2); // Output: 3
console.log(nums2.slice(0, length2)); // Output: [3, 0, -1]