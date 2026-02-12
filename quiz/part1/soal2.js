//## Soal 2
//```js
//cari faktor persekutuan terbesar
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // menggunakan algoritma Euclidean
  while (angka2 !== 0) {
    // angka2 dimasukan di dalam variabel sementara untuk mengunci nilai awal angka2
    let temp = angka2;
    // mengupdate angka 2 menjadi sisa dari pembagian angka1 dengan angka2
    angka2 = angka1 % angka2; //jika angka1 lebih kecil dari angka2 maka pada baris ini akan mengubah angka2 menjadi nilai dari angka1 karena angka1 % angka2 hasil pembagiannya = 0 makan modulus dari operasi tersebut adalah angka1
    // memperbarui angka 1 menjadi angka 2 sebelumnya untuk dibagi dengan sisa pembagian angka1 dengan angka2 yang tadi
    angka1 = temp;

  }
  // When angka2 becomes 0, angka1 holds the GCD
  return angka1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
//```
