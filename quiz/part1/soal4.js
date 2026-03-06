/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  // you can only write your code here!
  let modus = 0;
  let jumlahN = 0;
  let data = [];

  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    let jumlahSementara = 0;
    let isData = false;

    //looping untuk cek apakah n sudah dihitung & masuk data atau belum
    for (let j = 0; j < data.length; j++) {
      if (n === data[j]) isData = true;
    }

    //jika n sudah pernah dihitung & masuk data, lewati n
    if (isData) continue;

    //jika n belum masuk data, masukan n ke data dan hitung jumlah n
    data.push(n);
    for (let k = i; k < arr.length; k++) {
      if (n === arr[k]) jumlahSementara++;
    }

    // jika jumlah n ini > dari jumlah n sebelumnya
    // maka, nilai modus sebelumnya diganti nilai n
    // dan jumlah n sebelumnya diganti jumlah n ini
    if (jumlahSementara > jumlahN) {
      modus = n;
      jumlahN = jumlahSementara;
    }
  }

  //jika tidak ada modus atau semua nilai data sama, return -1
  if (jumlahN === 1 || data.length === 1) return -1;

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
