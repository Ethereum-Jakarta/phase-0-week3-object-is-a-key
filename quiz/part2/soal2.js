//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let newStr = str.split('');
    for (let i = 0; i < newStr.length - 1; i++) {
        for (let i2 = 0; i2 < newStr.length - i - 1; i2++) {
            if (newStr[i2] > newStr[i2 + 1]) {
                let switchedChar = newStr[i2];
                newStr[i2] = newStr[i2 + 1];
                newStr[i2 + 1] = switchedChar;
            }
        }
    }
    return newStr.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'