function cariMedian(arr) {
  // you can only write your code here!
  let angka = arr.sort((a, b) => {
    return a - b;
  });
  let n = angka.length;

  if (n % 2 == 0) {
    let angkaTengah1 = angka[n / 2];
    let angkaTengah2 = angka[n / 2 - 1];
    return (angkaTengah1 + angkaTengah2) / 2;
  } else {
    let angkaTengah = Math.floor(n / 2);
    return arr[angkaTengah];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
