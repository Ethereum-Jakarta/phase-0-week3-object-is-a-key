//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    let clone = [...str]
  for (let i = 0; i < clone.length-1; i++) {
   for (let j = 0; j < clone.length-i; j++) {
    if (clone[j]>clone[j+1]) {
        [clone[j],clone[j+1]]=[clone[j+1],clone[j]]
    }
   }
  }
  return clone.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'