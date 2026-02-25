function cariMedian(arr) {
    // you can only write your code here!
    const median = arr.length / 2;

    for (let i = 0; i < arr.length; i++) {         
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        }
      }
    }

    if(arr.length % 2 === 0){
      arr = (arr[median] + arr[(median - 1)]) / 2; 
    } else {
      arr = arr[Math.floor(median)];
    }

    return arr;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5