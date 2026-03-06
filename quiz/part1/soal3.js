function cariMedian(arr) {
   //genap or ganjil
   let hasil;
   if (arr.length % 2 == 0) {
      //urutkan
      let data = arr.sort((a, b) => {
         return a - b
      });
      let num1 = data.length / 2;
      let num2 = (data.length / 2) - 1;
      hasil = (arr[num1] + arr[num2]) / 2;
      return hasil;
   } else {
      hasil = (arr.length - 1) / 2;
      return arr[hasil];
   }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); //7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5