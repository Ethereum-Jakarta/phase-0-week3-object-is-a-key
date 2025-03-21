function cariModus(arr) {
  // you can only write your code here!
  arr.sort((a, b) => a - b)

  if (arr[0] === arr[arr.length - 1]) {
    return -1;
  }

  let obj = {}
  arr.forEach(element => {
    if (obj[element] !== undefined) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  });

  let result = 0;
  let maxCount = 0;

  for (const key in obj) {
    if (maxCount < Number(obj[key])) {
      maxCount = obj[key];
      result = key;
    }
  }

  return result == 1 ? -1 : Number(result);
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1