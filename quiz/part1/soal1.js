//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  let isPrime = null;

  if (angka !== 1 && angka > 1) {
    isPrime = true;
    // perulangan untuk iterasi setiap angka untuk pengecekan jika angka habis dibagi 2 sampai dengan angka - 1
    for (let i = 2; i < angka; i++) {
      // kondisi angka % i === 0, untuk mengetahui jika angka habis dibagi oleh angka selain 1 dan dirinya sendiri
      if (angka % i === 0) {
        isPrime = false; // jika angka habis dibagi oleh angka selain 1 dan dirinya sendiri maka bukan bilangan prima
        break;
      }
    }
  }

  return isPrime;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false