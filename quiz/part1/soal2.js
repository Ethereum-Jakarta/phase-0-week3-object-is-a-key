//cari faktor persekutuan terbesar
//rumus mencari fpb menggunakan algoritma euclidean

function fpb(angka1, angka2) {
  // you can only write your code here!
  let a = angka1;
  let b = angka2;

  //bilangan a harus lebih kecil dari bilangan b
  if (angka1 > angka2) {
    a = angka2;
    b = angka1;
  }

  let sisaBagi = b % a;
  if (sisaBagi === 0) return a;
  if (a % sisaBagi === 0) return sisaBagi;

  return 1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
