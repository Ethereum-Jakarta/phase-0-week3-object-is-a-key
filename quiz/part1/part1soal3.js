function cariMedian(arr) {
  // you can only write your code here!
    arrLength = arr.length
    let sortedArr = [];
    while(sortedArr.length < arrLength){
        let minimum = arr[0];
        let minimumIndex = 0;
        for(let i = 0; i<arr.length; i++){
            if(arr[i] < minimum){
                minimum = arr[i];
                minimumIndex = i;
            }
        }
        sortedArr.push(arr.splice(minimumIndex,1)[0]);
    }

  if (sortedArr.length % 2 == 0){
      return ((sortedArr[(sortedArr.length) / 2 - 1] + sortedArr[(sortedArr.length)/2])/2);
  }
  else{
      return sortedArr[(sortedArr.length+1)/2 - 1];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
