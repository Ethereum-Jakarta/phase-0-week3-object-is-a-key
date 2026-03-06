function fpb(angka1, angka2) {
  while (angka1 !== angka2) {
    if (angka1 > angka2) {
      angka1 -= angka2;
      console.log(angka1, angka2);
    } else {
      angka2 -= angka1;
      console.log(angka1, angka2);
    }
  }
  return angka1;
}
console.log(fpb(12, 16));
console.log(fpb(50, 40));
console.log(fpb(22, 99));
console.log(fpb(24, 36));
console.log(fpb(17, 23));
