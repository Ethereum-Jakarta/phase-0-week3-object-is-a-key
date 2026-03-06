//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let chartemp = [];
    for (let i = 0; i < str.length; i++) chartemp.push(str[i]);
    for (let i = 0; i < chartemp.length - 1; i++) {
        for (let j = 0; j < chartemp.length - 1 - i; j++) {
            if (chartemp[j] > chartemp[j + 1]) {
                let temp = chartemp[j];
                chartemp[j] = chartemp[j + 1];
                chartemp[j + 1] = temp;
            }
        }
    }
    let result = "";
    for(let i = 0; i < chartemp.length; i++) result += chartemp[i];
    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'