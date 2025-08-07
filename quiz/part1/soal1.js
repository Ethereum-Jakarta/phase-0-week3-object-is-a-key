//## Soal 1
//```js
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!
  if (angka < 2) {
    return false;
  }

  for (
    let i = 2;
    i <= Math.sqrt(angka);
    i++ //cukup sampai akar kuadrat dari angka untuk mengetahui apakah angka tersebut prima atau bukan, karena pada akar kuadrat sudah mencapai angka tengah dari pembagi angka tersebut. bila diteruskan lagi hanya akan membuang waktu
  ) {
    if (angka % i === 0) {
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
//```
