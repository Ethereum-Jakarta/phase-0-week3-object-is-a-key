function cariMedian(arr) {
  // you can only write your code here!
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  let median;
  if (count % 2 !== 0) {
    median = arr[Math.ceil((count - 1) / 2)];
  } else {
    median =
      (arr[Math.floor((count - 1) / 2)] +
        arr[Math.floor((count - 1) / 2) + 1]) /
      2;
  }

  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 7, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
