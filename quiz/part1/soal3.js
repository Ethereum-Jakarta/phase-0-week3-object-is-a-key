function cariMedian(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  if (n % 2 === 0) {
    return Math.abs((arr[n / 2] + arr[n / 2 - 1]) / 2);
  } else {
    return arr[Math.floor(n / 2)];
  }
}
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
