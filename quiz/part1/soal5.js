// Soal 5

//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya


/*  ==== ALGORITMA ====
1. gunakan method .toLowerCase() pada input string untuk memastikan jika input berupa alphabet besar, sistem akan merubahnya menjadi huruf kecil.
2. Buat variable result dengan string kosong sebagai default valuenya
3. Buat for loop untuk memeriksa huruf string satu persatu sampai panjang string nya
4. Ubah setiap huruf dalam string menjadi format unicode dan tambah hasilnya menjadi satu, lalu simpan hasilnya kedalam variable charCode
5. Gunakan kondisi if else untuk memastikan jika huruf adalah z dan ketika di ubah menjadi unicode nilainya 123 maka ubah nilainya menjadi 97 atau a dan kalao else ubah string dalam format unicode menjadi string kembali.
6. kembalikan result di luar loop

*/

function ubahHuruf(kata) {
  // you can only write your code here!
let kata2 = kata.toLowerCase();
let result = '';

for(let i = 0; i < kata2.length; i++) {
    let charCode = kata2.charCodeAt(i) + 1;

    if(charCode === 123) {
        result += String.fromCharCode(97);
    } else {
        result += String.fromCharCode(charCode);
    }
}

return result;
}

// TEST CASES
console.log(ubahHuruf('Wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
