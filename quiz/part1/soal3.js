function cariMedian(arr) {
  // Pertama, urutkan array
  arr.sort((a, b) => a - b);

  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    // Jika ganjil, median adalah nilai tengah
    return arr[mid];
  } else {
    // Jika genap, median adalah rata-rata dari dua nilai tengah
    return (arr[mid - 1] + arr[mid]) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
