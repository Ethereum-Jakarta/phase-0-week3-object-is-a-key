/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  // you can only write your code here!
  let kumpulan_angka = {};
  let n_max = 1;
  let modus = null;

  // kelompokkan angka kedalam objek kumpulan angka
  for (n of arr) {
    kumpulan_angka[n] = (kumpulan_angka[n] || 0) + 1;
    if (n_max < kumpulan_angka[n]) {
        n_max = kumpulan_angka[n];
    } 
  }

  // jika kumpulan angka kurang dari 2 maka return -1
  // kemungkinan karena angka dalam array sama semua atau tidak ada angka sama sekali
  if (Object.keys(kumpulan_angka).length < 2) return -1;

  // jika n max masih 1 berarti tidak ada modus yang ditemukan dalam array
  if (n_max === 1) return -1;

  // filter kumpulan angka agar hanya tersisa kumpulan angka modus saja
  for (const key in kumpulan_angka) {
   if (kumpulan_angka[key] < n_max) delete kumpulan_angka[key];
  }
  
  // dari kumpulan angka modus itu tentukan modus yang pertama kali ditemukan dalam array
  for (const n of arr) {
    for (const key in kumpulan_angka) {
        if (+key === n) {
            modus = n;
            break;
        }
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