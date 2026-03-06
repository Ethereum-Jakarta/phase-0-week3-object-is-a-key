function cariMedian(arr) {
    arr.sort((a, b) => a - b); // Urutkan dari kecil ke besar

    if (arr.length % 2 === 0) {
        let i = arr.length / 2;
        return (arr[i - 1] + arr[i]) / 2;
    } else {
        let j = Math.floor(arr.length / 2);
        return arr[j];
    }
}

  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5