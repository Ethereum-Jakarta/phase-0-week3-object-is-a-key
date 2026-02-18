function cariMedian(arr) {
  let t = 0;

  for (let i = 0; i < arr.length; i++) {
    let terbesar = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[terbesar] > arr[j]) {
        terbesar = j;
      }
    }
    t = arr[i];
    arr[i] = arr[terbesar];
    arr[terbesar] = t;
  }

  let median = 0;

  if (arr.length % 2 !== 0) { //Ganjil
    //Rumus = arr [n + 1 / 2]
    median = arr[((arr.length + 1) / 2) - 1];
  } else if (arr.length % 2 === 0) { //Genap
    //Rumus = (arr[n / 2] + arr[(n / 2) + 1]) / 2
    median = (arr[(arr.length / 2) - 1] + arr[((arr.length / 2) + 1) - 1]) / 2;
  }

  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5