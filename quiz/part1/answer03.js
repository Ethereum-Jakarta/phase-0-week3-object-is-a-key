function cariMedian(arr) {
  // you can only write your code here!
  const n = arr.length;
  if (n % 2 != 0) {
    const medIndex = (n - 1) / 2;
    return arr[medIndex];
  }
  const medIndex = n / 2 - 1;
  const median = (arr[medIndex] + arr[medIndex + 1]) / 2;
  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
