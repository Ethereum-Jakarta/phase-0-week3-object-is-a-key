// Soal 3
// ==== ALGORITHM ====
// 1. Use .sort() method for make array value to be neat
// 2. Use if condition to check does the array length is odd or even, if odd divide the total lenght of array with 2 and if even we have to divide it with 2 and add up with the next index of array, and after that we have to divide the total with 2 and then return the result!


function cariMedian(arr) {
  // you can only write your code here!
  arr.sort((a,b) => a-b);

  let midIndex = Math.floor(arr.length / 2);

  if(arr.length % 2 === 0) {
    return (arr[midIndex] + arr[midIndex - 1]) / 2;
  } 

  return arr[midIndex];
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
