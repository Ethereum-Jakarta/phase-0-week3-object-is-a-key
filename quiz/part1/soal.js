
// Soal 1

//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima

// ==== ALGORITMA ====
// 1. Gunkan for loop untuk melakuakn perulangan sampai Math.sqrt 
// 2. gunakan pengkondisian if jika angka % i === 0 maka return false
// 3. JIka sampai loop selesai tidk mereturn false maka return treu

function angkaPrima(angka) {
  // you can only write your code here!

  for(let i = 2; i <= Math.sqrt(angka); i++) {
    if(angka % i === 0) {return false};
  }
  return true;
}
  
  

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false