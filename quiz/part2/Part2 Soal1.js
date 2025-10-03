function digitPerkalianMinimum(angka) {
  let minDigit = Infinity;

  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      let j = angka / i;
      let gabungan = String(i) + String(j);
      let panjang = gabungan.length;

      if (panjang < minDigit) {
        minDigit = panjang;
      }
    }
  }

  return minDigit;
}

console.log(digitPerkalianMinimum(24));
console.log(digitPerkalianMinimum(90));
console.log(digitPerkalianMinimum(20));
console.log(digitPerkalianMinimum(179));
console.log(digitPerkalianMinimum(1));
