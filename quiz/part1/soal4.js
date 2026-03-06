function cariModus(arr) {
  if (arr.length === 0) {
    return -1;
  }

  let freq = {};
  let modus = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    if (freq[arr[i]] > max) {
      max = freq[arr[i]];
      modus = arr[i];
    }
  }

  if (max === 1 || max === arr.length) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === max) {
      return arr[i];
    }
  }
  return modus;
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1