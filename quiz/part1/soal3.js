
function cariMedian(arr) {
  // you can only write your code here!
  for(let i = 0; i < arr.length - 1; i++) {
    let median = arr.length;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] === arr[j + 1]) {
        let temp = arr[j];
        temp = arr[j]
      }
    }
    if(median % 2 !== 0){
        return arr[Math.floor(median / 2)]
    }else{
        let median1 = arr[median / 2 -1];
        let median2 = arr[median / 2];
        return (median1 + median2) / 2;
    }
  
}
return arr;
}
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
