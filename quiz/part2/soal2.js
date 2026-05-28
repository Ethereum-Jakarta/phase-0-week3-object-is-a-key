
//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  str = str.split("");
  // you can only write your code here!
  for ( let i = 0; i < str.length; i++) {
    for (let q = 0; q <str.length; q++) {
        if(str[q] > str[q+1]) {
            [str[q], str[q+1]] = [str[q+1], str[q]];
        }
    }
  }
  return str.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
