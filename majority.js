var majorityElement = function (nums) {
  let candidate = null
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
      count = 1
    } else if (nums[i] === candidate) {
      count++
    } else {
      count--
    }
  }

  return candidate
}

console.log(majorityElement([3, 2, 3]))
