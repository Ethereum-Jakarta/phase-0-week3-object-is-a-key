function cariMedian(arr) {
    // you can only write your code here!
    
    let median = 0;
    let n = arr.length;
    arr.sort((a,b) => a - b);
    if (n % 2 === 0) {
        median = (arr[n/2 - 1] + arr[n/2]) / 2;
    } else {
        median = arr[(n - 1)/2];
    }
    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5