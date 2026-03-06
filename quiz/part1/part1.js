// # Logic Challenge tanpa tipe data object | Part 1

// Sabar jangan langsung ke object dulu, kalian harus asah logic lagi wkwk

// ## Soal 1
// ```js
// //cek apakah angka yang dikirim adalah angka prima atau bukan?
// //cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    if (angka <= 1) return false;
    if (angka <= 3) return true;

    if (angka % 2 === 0 || angka % 3 === 0) return false;

    for (let i = 5; i * i <= angka; i += 6) { 
        if (angka % i === 0 || angka % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// // TEST CASES
console.log("Soal 1")
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
// ```
// ## Soal 2
// ```js
// //cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // Menggunakan algoritma Euclidean
    let hasil = angka1 % angka2
    while (hasil !== 0) {
        angka1 = angka2;
        angka2 = hasil;
        hasil = angka1 % angka2;
    }
    return angka2;

    // // Menggunakan destructuring assignment
    // while (angka2 !== 0) {
    //     [angka1, angka2] = [angka2, angka1 % angka2];
    // }
    // return angka1;
}

// // TEST CASES
console.log("\nSoal 2")
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
// ```
// ## Soal 3
// ```js
function cariMedian(arr) {
  let median = 0;
  let panjangArr = arr.length;
  arr.sort((a, b) => a - b);
  if (panjangArr % 2 === 0) {
    median = (arr[panjangArr / 2 - 1] + arr[panjangArr / 2]) / 2;
  }
  else {
    median = arr[(panjangArr - 1) / 2];
  }
  return median;
}

// // TEST CASES
console.log("\nSoal 3")
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
// ```

// ## Soal 4
// ```js
// /*
// Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
// Function akan me-return modus dari array atau deret angka tersebut. 
// Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
// Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, 
// function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, 
// tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
// Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, 
// Contohnya [1, 1, 1] adalah -1.
// */
function cariModus(arr) {
  // you can only write your code here!
    let modus = -1;
    let frekuensi = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempFrekuensi = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                tempFrekuensi++;
                if (tempFrekuensi > frekuensi) {
                    frekuensi = tempFrekuensi;
                    modus = arr[i];
                }
            }
        }
    }
    if (frekuensi === 0) return -1;
    return modus;
}

// // TEST CASES
console.log("\nSoal 4")
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
// ```
// ## Soal 5
// ```js
// //sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
// //intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let result = '';
    for (let i = 0; i < kata.length; i++) {
        let char = kata.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            char = (char - 65 + 1) % 26 + 65;
        }
        if (char >= 97 && char <= 122) {
            char = (char - 97 + 1) % 26 + 97;
        }
        result += String.fromCharCode(char);
    }
    return result;
}

// // TEST CASES
console.log("\nSoal 5")
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
// ```