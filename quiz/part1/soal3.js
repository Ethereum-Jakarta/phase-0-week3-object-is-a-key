function cariMedian(arr) {
    // you can only write your code here!
    let tengah = arr.length/2;
    arr.sort(function(a, b){return a - b});

    if(arr.length % 2 == 0){
      return (arr[tengah] + arr[tengah-1])/2;
    }
    else{
      return arr[Math.floor(tengah)];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5