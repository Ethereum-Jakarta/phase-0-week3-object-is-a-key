// Soal 4

/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

// ==== ALGORITMA ====
// 1. buat variable max Apperance untuk menyimpan modus yang paling banyak muncul
// 2. buat variable modus untuk menyimpan nilai modus yang sering muncul
// 3. Buat nested loop
// 4. Buat for loop pertama dan deklarasikan variable count didalamnya dan isi dengan 1 sebagai nilai default nya yang digunakan untuk menghitung jumlah suatu elemen atau angka muncul
// 5. Buat for loop kedua yang didalamnya mengunakan pengkondisian if untuk memastikan indeks outer loop dan inner loop tidak sama untuk menghindari sistem membandingkan nilai dalam satu indeks yang sama, lalu setelah itu bandingkan elemen dalam indeks outer loop dan inner loop.
// 6. apabila ada elemen atau nilai yang sama maka variable count akan menambahi dirinya (incerment) dan nilainya berubah menjadi 2 yang berarti modus pertama telah di temukan.
// 7. jika inner loop sudah selesai maka di bagian outer loop kita membandingkan apakah count (jumlah angka yang muncul) itu lebih besar dari modus yang paling banyak muncul? jika ya ubah nilai maxApperance menjadi nilai count dan masukan elemen modusnya kedalam variable modus.
// 8. Jika outer loop sudah selesai maka lakukan pengecekan ketat, apakah maxApperance varable value nya cuma satu atau maxApperance nya sama dengan panjang array, maka return -1;
// 9. jiak ternyata kondisi if yang sebelumnya bernilai false, maka return nilai modus nya.

function cariModus(arr) {
  // you can only write your code here!
  let maxApperance = 0;
  let modus = -1;

  for(let i = 0; i < arr.length; i++) {
    let count = 1;
    for(let j = 0; j < arr.length; j++) {
        if(i !== j && arr[i] === arr[j]) {
          count++;   
        }
    }
      if(count > maxApperance) {
        maxApperance = count;
        modus = arr[i];
      }
  }

  if(maxApperance === 1 || maxApperance === arr.length) {
     return -1;
  }

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1