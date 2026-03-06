//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let sorted = '';
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(alphabet[i] === str[j]) {
                // console.log(alphabet[i], str[j])
                sorted += alphabet[i];
            }
        }
    }
    return sorted
    // console.log(str)
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'