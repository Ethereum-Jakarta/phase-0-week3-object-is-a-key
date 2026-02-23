function cariMedian(arr) {
  // you can only write your code here!

  let sorted_array = arr.sort((a, b) => a - b);

  if (sorted_array.length % 2 === 1) return sorted_array[Math.floor(sorted_array.length / 2)];

  let result = 0;

  
  let angka_setelah_tengah = Math.round(sorted_array.length / 2);
  let angka_sebelum_tengah = Math.round(sorted_array.length / 2) - 1;
  result = (sorted_array[angka_setelah_tengah] + sorted_array[angka_sebelum_tengah]) / 2;
  
  return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5