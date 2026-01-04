// ==========================
// Soal 1
// ==========================
// cek apakah angka yang dikirim adalah angka prima atau bukan?
// cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!
  let limit = Math.ceil(Math.sqrt(angka));
  if (angka <= 1) return false;
  for (let i = 2; i <= limit; i++) {
    if (i !== angka && angka % i === 0) {
      //check if angka habis dibagi angka selain itself
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

// ------------------------------------
console.log("");
// ------------------------------------
