//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  let arr = str.split('');


  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = 0; j <= str.length - 1 - i; j++) {
      if (abc.indexOf(arr[j]) > abc.indexOf(arr[j + 1])) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  console.log(arr.join(''));

}




// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'