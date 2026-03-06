function cariMedian(arr) {
  // you can only write your code here!
  let median = 0;

  //looping data arr untuk sorting
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  //jika jumlah data genap, median => kedua nilai tengah dibagi 2
  //jika jumlah data ganjil, median => nilai tengah
  if (arr.length % 2 === 0) {
    let i = arr.length / 2;
    let j = arr[i] + arr[i - 1];
    median = j / 2;
  } else {
    let i = Math.floor(arr.length / 2);
    median = arr[i];
  }

  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
