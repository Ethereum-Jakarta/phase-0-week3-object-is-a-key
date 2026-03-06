function cariMedian(arr) {
    arr = arr.sort((a,b) => a - b)
    if (arr.length % 2 != 0){
        return arr[Math.round(arr.length/2)-1];
    } else {
        return ((arr[(arr.length/2)-1] + arr[arr.length/2]) /2);
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5