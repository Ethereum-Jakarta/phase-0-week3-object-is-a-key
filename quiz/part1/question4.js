function cariModus(arr) {
  // you can only write your code here!
  const frequency = {};

  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }
  

  let maxFreq = 0;
  let mode = -1;
  let count = 0;


  for (const num in frequency) {
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = parseInt(num);
      count = 1;
    } else if (frequency[num] === maxFreq) {
      count++;
    }
  }

  if (count > 1 || maxFreq === 1) {
    return -1;
  }

  return mode;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
