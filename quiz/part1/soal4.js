function cariModus(arr) {
  arr.sort((a, b) => a - b);

  if (arr[0] === arr[arr.length - 1]) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
  return -1;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
