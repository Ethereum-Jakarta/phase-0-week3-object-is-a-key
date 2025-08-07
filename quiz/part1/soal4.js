//## Soal 4
//```js
/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
  // you can only write your code here!
  if (arr.length === 0) {
    return "data ini kosong";
  }
  // inisialisasi frekuensi dan variabel pelacak
  const frekuensi = {};
  let modus = null;
  let nilaiTertinggi = 0;

  // mengisi objek frekuensi dengan niai yang ada di arr
  for (const angka of arr) {
    frekuensi[angka] = (frekuensi[angka] || 0) + 1; //pada code ini kita akan mengambil nilai dari arr mulai dari awal sampai akhir kemudian dimasukan ke dalam objek frekuensi. Jika nilai sudah ada maka nilai akan ditambahkan 1. Jika nilai belum ada maka nilai akan diisi 0 dan ditambahkan 1.
  }

  // menemukan modus dari objek frekuensi
  for (const angka in frekuensi) {
    if (frekuensi[angka] > nilaiTertinggi) {
      nilaiTertinggi = frekuensi[angka];
      modus = Number(angka); // mengkonversi angka yang merupakan key objek yang otomatis string menjadi number
    }
  }

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
