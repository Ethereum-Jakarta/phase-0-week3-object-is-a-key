/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  // obj untuk menghitung jumlah kemunculan setiap angka
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    // untuk setiap angka pada arr, jika belum ada angka sebagai key pada obj
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1; // buat obj dengan angka sebagai key dan 1 sebagai value
    } else {
      obj[arr[i]] += 1; // jika obj sudah memiliki angka sebagai key, tambah value sebanyak 1
    }
  }

  let highestValue = 1; // untuk jumlah kemunculan angka
  let highestValueKey = -1; // untuk angka dengan jumlah kemunculan paling sering (modus)
  let count = 0; // untuk menghitung total angka yang ada pada obj

  for (const key in obj) {
    // hasOwnProperty mengembalikan nilai boolean, jika true tambahkan nilai count
    if (obj.hasOwnProperty(key)) {
      count++;
    }

    // kondisi jika value obj > nilai highestValue
    // akan menghasilkan nilai -1 jika tidak ditemukan modus
    // dan akan menghasilkan nilai modus yang paling pertama muncul jika ditemukan lebih dari 2 modus
    if (obj[key] > highestValue) {
      highestValue = obj[key];
      highestValueKey = key;
    }
  }

  // kondisi jika modus hanya punya 1 nilai angka yang sama
  if (count === 1) {
    return -1;
  }

  // kembalikan nilai angka modus
  return Number(highestValueKey);
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1