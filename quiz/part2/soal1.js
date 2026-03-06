function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let minDigits = Infinity;
  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      let j = angka / i;
      let digits = (i.toString() + j.toString()).length;
      if (digits < minDigits) {
        minDigits = digits;
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
