//cari faktor persekutuan terbesar
const fpb = (angka1, angka2) => angka2 === 0 ? angka1 : fpb(angka2, angka1 % angka2);
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1