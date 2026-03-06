//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    let hasil = '';
    for(let i = 0; i < abjad.length; i++){
            for(let j = 0; j < str.length; j++){
                if(abjad[i] === str[j]){
                    hasil += str[j];
                }
            }
        }
    return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'