// Soal 2
//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting

/* ==== ALGORITHM ====
1. Buat array kososng bernama unicode gunanya untuk menyimpan seleuruh huruh dalam string menjadi uniocde 
2. buat variable result dengan string kososng sebagi default valuenya
3. buat for loop untuk mengubah seluruh huruf alphabet string input menjadi format unicode dan simpan ke dalam unicode variable 
4. buat bubleshort loop untuk menjajarkan alphabet dalam format unicode dari kecil ke besar
5. gunakan method .map() untuk mengubah nilai dalam array unicode yang telah ter urut menjadi alpahabet kembali menggunakan method .fromCharCode() dan simpan nilainya kedalam variable result
6. return result

*/
function urutkanAbjad(str) {
  // you can only write your code here!
 let uniCode = [];
 let result = "";

 for(let i = 0; i < str.length; i++) {
    uniCode.push(str.charCodeAt(i));
 }

 for(let j = 0; j < uniCode.length; j++) {
    for(let m = 0; m < uniCode.length - 1; m++) {
        if(uniCode[m] > uniCode[m + 1]) {
            let temp = uniCode[m];
            uniCode[m] = uniCode[m + 1];
            uniCode[m + 1] = temp;
        }
    }
 }

 uniCode.map(curr => result += String.fromCharCode(curr));
 return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'


