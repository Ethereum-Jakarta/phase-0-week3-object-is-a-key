function cariMedian(arr) {
  arr.sort((a, b) => a - b);
  let tengah = arr.length / 2;
  let res = arr[tengah - 1] + arr[tengah];

  if (arr.length % 2 === 0) {
    return res / 2;
  } else {
    return arr[parseInt(tengah)];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
