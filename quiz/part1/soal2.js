//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  let hasil = [];
  let terbesar = "";
  let terkecil = "";
  if (angka1 > angka2) {
    terbesar = angka1;
    terkecil = angka2;
  } else {
    terkecil = angka1;
    terbesar = angka2;
  }
  for (let i = 0; i < terkecil; i++) {
    if (terbesar % i == 0 && terkecil % i == 0) {
      hasil.push(i);
    }
  }
  return Math.max(...hasil);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
