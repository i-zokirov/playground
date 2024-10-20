function findKthLargest(arr, k) {
    if (arr.length === 0) return null;
  
    // Choose a pivot element (here, we choose the middle one)
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
  
    // Partition the array into three parts
    const lows = [];    // Elements less than pivot
    const highs = [];   // Elements greater than pivot
    const pivots = [];  // Elements equal to pivot
  
    for (let num of arr) {
      if (num > pivot) {
        highs.push(num);
      } else if (num < pivot) {
        lows.push(num);
      } else {
        pivots.push(num);
      }
    }
  
    // Now, decide which partition contains the Xth largest element
    if (k < highs.length) {
      // The Xth largest is in the highs
      return findKthLargest(highs, k);
    } else if (k < highs.length + pivots.length) {
      // The pivot is the Xth largest element
      return pivots[0];
    } else {
      // The Xth largest is in the lows
      return findKthLargest(lows, k - highs.length - pivots.length);
    }
  }
  
  // Example usage:
 

  const arr =  [3,2,1,5,6,4]
  const X = 2; // Looking for the 3rd largest element (Zero-based index)
  
  const result = findKthLargest(arr, X - 1); // Adjusting for zero-based index
  console.log(`The ${X}rd largest element is ${result}`);
  