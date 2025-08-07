//## Soal 2
//```js
//cari faktor persekutuan terbesar
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // menggunakan algoritma Euclidean
  while (angka2 !== 0) {
    // Store the current value of angka2 in a temporary variable
    let temp = angka2;
    // Update angka2 to be the remainder of angka1 divided by angka2
    angka2 = angka1 % angka2;
    // Update angka1 to be the value that was previously in temp (the old angka2)
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
