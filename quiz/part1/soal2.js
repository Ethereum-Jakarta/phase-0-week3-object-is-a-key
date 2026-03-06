//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let arrAngka1 = [];
  let arrAngka2 = [];
  for (let i = 1; i <= angka1; i++) {
    if (angka1 % i == 0) {
      arrAngka1.push(i);
    }
  }
  for (let i = 1; i <= angka2; i++) {
    if (angka2 % i == 0) {
      arrAngka2.push(i);
    }
  }

  let filterFPB = arrAngka1.filter((val) => arrAngka2.includes(val));
  return Math.max(...filterFPB);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
