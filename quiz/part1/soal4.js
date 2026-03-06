function cariModus(arr) {
  // you can only write your code here!
  let modus = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    let currentCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentCount++;
      }
    }
    if (currentCount > count) {
      count = currentCount;
      modus = arr[i];
    } else if (modus > arr[i] && currentCount == count) {
      modus = arr[i];
    } else if (count > 2) {
      return -1;
    } else if (count == 1 && arr[i] > 2) {
      return -1;
    }
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4]));
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
