function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let minDigit = Infinity;

  for(let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
        let pasangan = angka / i;
        let digitGabungan = (i.toString() + pasangan.toString()).length;
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
