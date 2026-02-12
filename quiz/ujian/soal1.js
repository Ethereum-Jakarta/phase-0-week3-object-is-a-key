/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/

function deepSum(arr) {
  // Code disini
  // identifikasi apakah data yang beri berupa array yang tidak kosong
  if (!Array.isArray(arr) || arr.length == 0) {
    return [];
  }

  //deklarasi variabel hasil
  let hasil = 0;

  // menggunakan fungsi rekursi dengan for ...of
  for (const element of arr) {
    // implementasi fungsi rekursi
    if (Array.isArray(element)) {
      // di sini pointnya, ketika elemen di dalam array berupa array maka tambahkan total dengan hasil pemanggilan fungsi deepSum(elemem) => fungsi rekursi
      hasil += deepSum(element); // fungsi ini berfungsi untuk membedah array yang ada di dalam array
    } else if (typeof element === "number") {
      hasil += element; //jika element yang dibedah sudah bukan array(number) maka code ini akan dijalankan
    }
  }

  return hasil;
}

//TEST CASE
console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3],
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90],
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10],
    ],
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]],
  ])
); // 156

console.log(deepSum([])); // No number
