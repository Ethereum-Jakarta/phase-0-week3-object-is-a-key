function cariMedian(arr) {
    arr.sort(function(a,b){return a-b});

    if (arr.length % 2 == 1) {
        return arr[(arr.length - 1)/2]; //Jika arraynya ganjil
    } else {
        return (arr[(arr.length/2)] + (arr[(arr.length/2)-1]))/2  //Jika arraynya genap
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5