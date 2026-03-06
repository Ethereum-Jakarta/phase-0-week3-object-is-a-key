//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let kelipatan1 = [];
  let kelipatan2 = [];
  let max = Math.max(angka1, angka2);
  let min = Math.min(angka1, angka2);

  for (let index = 0; index <= max; index++) {
    if (index <= min) {
      if (angka1 % index == 0) kelipatan1.push(index);
    }

    if (angka2 % index == 0) kelipatan2.push(index);
  }

  let fp = [];
  for (let i = 0; i < kelipatan1.length; i++) {
    for (let j = 0; j < kelipatan2.length; j++) {
      if (kelipatan1[i] == kelipatan2[j]) {
        fp.push(kelipatan1[i]);
      }
    }
  }
  return Math.max(...fp);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
