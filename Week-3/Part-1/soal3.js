function cariMedian(arr) {
  // you can only write your code here!
  arr.sort(function(a, b) {
    return a - b;
  });
  for(let i = 0; i < arr.length; i++) {
    if((i+1 === arr.length) && (arr.length % 2 === 0)) {
      return ((arr[arr.length / 2 - 1]) + (arr[arr.length / 2])) / 2;
    } 
  }
  return arr[Math.floor(arr.length / 2)];
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
