function angkaPrima(angka) {
    let penentu = 0
  if (angka <= 1 ) {return false}
  for (let i = 0; i <= angka; i++) {
    if (angka%i===0) {
        penentu++
    }
  }   
  return penentu > 3 ? false : true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false