const arr = [0,4,4,0,4,4,4,0,2]
const val = 4

// var removeElement = function(nums, val) {
//     let poppedInlastIteration = false
//     for(let i = 0; i < nums.length; i++){
//         let indexToCheck = poppedInlastIteration ? i - 1 : i
//      if(nums[indexToCheck] === val){
//          nums.splice(indexToCheck, 1)
//          poppedInlastIteration = true
//      } else {
//         poppedInlastIteration = false
//      }
//     } 
//     if(nums[nums.length - 1] === val){
//         nums.pop()
//     }
//     return nums.length
//  };

var removeElement = function(nums, val) {
    const n = nums.length
    for(let i = 0; i < n; i++){
        console.log("iterating element")
  
     if(nums[i] === val){
         nums.splice(i, 1)
         i-- // To account for the spliced element in the next iteration
          if(!nums.includes(val)) break 
     }
    } 
    if(nums[nums.length - 1] === val){
        nums.pop()
    }
    return nums.length
 };
 console.log(removeElement(arr, val)) // Output: 5
 console.log(arr) // Output: [0, 1, 3, 0, 4]