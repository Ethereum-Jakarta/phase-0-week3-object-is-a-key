//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // Euclid Algorithm

  // untuk memastikan angka1 dan angka2 adalah bilangan bulat positif
  let a = Math.abs(angka1);
  let b = Math.abs(angka2);

  // selama b !== 0
  // gantikan nilai a dengan b, dan nilai b dengan sisa pembagian a dan b
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  // kembalikan nilai a (fpb dari bilangan awal), ketika b === 0
  return a;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1