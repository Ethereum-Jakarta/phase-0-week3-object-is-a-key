//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let sekutuAngka1 = [];
  let sekutuAngka2 = [];

  for (let i = 0; i <= angka1; i++) {
    if (angka1 % i == 0) {
      sekutuAngka1.push(i);
    }
  }

  for (let i = 0; i <= angka2; i++) {
    if (angka2 % i == 0) {
      sekutuAngka2.push(i);
    }
  }

  let faktorPersekutuan = sekutuAngka1.filter((value) =>
    sekutuAngka2.includes(value)
  );

  let FPB = Math.max(...faktorPersekutuan);
  return FPB;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
