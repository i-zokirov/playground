
const nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; 
    let uniqueIndex = 0
    for(let j = 1; j < nums.length; j ++){
        if (nums[j] !== nums[uniqueIndex]) {
            uniqueIndex++; // Move the uniqueIndex pointer forward
            nums[uniqueIndex] = nums[j]; // Update the position with the unique element
        }
    }
    return nums.slice(0, uniqueIndex)
    
};

console.log(removeDuplicates(nums))
console.log(nums)