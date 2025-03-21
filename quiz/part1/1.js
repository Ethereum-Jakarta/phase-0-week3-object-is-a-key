function angkaPrima(angka) {
  // you can only write your code here!
  let counter = 0;

  if (angka < 2) {
    return false
  }

  for (let i = 2; i <= angka; i++) {
    if (angka % i === 0) {
      counter++;
    }
  }

  return counter === 1 ? true : false;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
