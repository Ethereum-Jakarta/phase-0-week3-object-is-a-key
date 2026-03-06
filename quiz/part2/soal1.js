function digitPerkalianMinimum(angka) {
  let minDigit = Infinity;

  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      let j = angka / i;
      let digitGabungan = (i.toString() + j.toString()).length;

      if (digitGabungan < minDigit) {
        minDigit = digitGabungan;
      }
    }
  }

  return minDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
