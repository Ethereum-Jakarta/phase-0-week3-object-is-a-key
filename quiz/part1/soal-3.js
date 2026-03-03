function cariMedian(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  let result;

  if (sorted.length % 2 === 0) {
    result = (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    result = sorted[mid];
  }

  return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
