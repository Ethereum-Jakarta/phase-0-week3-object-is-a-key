//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
    let arrStr = str.split('')
    for (let i = str.length-1; i > 0;i--){
        for(let j =0; j < i; j++){
            if (arrStr[j].charCodeAt(0) > arrStr[j+1].charCodeAt(0)){
                temp = arrStr[j];
                arrStr[j] = arrStr[j+1];
                arrStr[j+1] = temp;
            }
        }
    }
    return arrStr.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'