function digitPerkalianMinimum(angka) {
  let minDigits = Infinity;

  // Iterasi dari 1 sampai angka (bisa dioptimasi sampai sqrt(angka))
  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      let j = angka / i;
      // Hitung jumlah digit dari kedua faktor
      let digitCount = i.toString().length + j.toString().length;

      // Simpan jumlah digit minimum
      if (digitCount < minDigits) {
        minDigits = digitCount;
      }
    }
  }

  return minDigits;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
