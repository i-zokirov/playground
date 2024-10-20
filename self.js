function productExceptSelf(nums) {
  const length = nums.length
  const result = new Array(length).fill(1)

  // Calculate products of all elements to the left of each index
  let leftProduct = 1
  for (let i = 0; i < length; i++) {
    result[i] = leftProduct
    leftProduct *= nums[i]
  }

  // Calculate products of all elements to the right of each index
  let rightProduct = 1
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct
    rightProduct *= nums[i]
  }

  return result
}
console.log(productExceptSelf([2, 3, 4, 5]))
