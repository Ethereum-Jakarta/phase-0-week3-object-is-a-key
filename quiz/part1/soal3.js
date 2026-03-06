function cariMedian(arr) {
  // you can only write your code here!
  const arrSorted = arr.sort((a, b) => a - b);
  const n = arrSorted.length;
  if (n % 2 === 0) {
    let tengah = Math.floor((n - 1) / 2);

    return (arrSorted[tengah] + arrSorted[tengah + 1]) / 2;
  }
  return arrSorted[Math.floor(n / 2)];
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
