function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  const faktor = [];

  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      faktor.push(Number(`${i}${angka / i}`));
    }
  }

  return String(faktor.sort((a, b) => a - b)[0]).length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
