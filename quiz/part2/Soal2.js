//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here
 let arr= str.split('')
  for(var i=0;i<arr.length;i++) {
    for(var u=1;u<arr.length;u++) {
    if(arr[i] > arr[i+u]) {
      let temu = arr[i]
      arr[i] = arr[i+u]
      arr[i+u] = temu
    }
    }
  }
  return arr.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'