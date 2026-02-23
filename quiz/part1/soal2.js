//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let angka_terkecil = null;
  let angka_terbesar = null;
  // cari angka terbesar
  if (angka1 < angka2) {
      angka_terkecil = angka1;
      angka_terbesar = angka2;
  } 
  if (angka1 > angka2) {
      angka_terkecil = angka2;
      angka_terbesar = angka1;
  } 
  if (angka1 === angka2) return angka1;

  for (let i = angka_terkecil; i > 0; i--) {
    if ((angka_terkecil % i === 0) && (angka_terbesar % i === 0)) return i;
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1