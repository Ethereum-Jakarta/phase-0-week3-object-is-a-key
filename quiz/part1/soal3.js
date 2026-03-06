function cariMedian(arr) {
  // you can only write your code here!
  arr.sort((a,b) => a - b)
  if(arr.length % 2 === 0){
    // data genap
    let first = arr.length / 2
    let second = first + 1
    let rumus = (arr[first - 1] + arr[second - 1]) / 2
    
    return rumus
  } else {
    // data ganjil
    let rumus = (arr.length + 1) / 2

    return arr[rumus - 1]
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
