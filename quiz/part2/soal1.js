// Soal 1

/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/

/* ==== ALGORITHM ====
1. Buat variable minDigit untuk menyimpan digit dari faktornya nanti, simpan nilai infiniti sebagai default 
2. Buat for loop untuk mencari pasangan faktor, jalankan loop sampai akar kuadrat nya angka
3. gunakan if condition seperti (angka % i === 0) lalu didalamnya  gunakan operator modulus untuk mencari faktor dengan cara jika 'angka % i === 0' i adalah faktor, lalu cari pasangan yang satunya lagi dengan gunkan operator bagi (/) speerti `angka / i == hasil` nah, hasilnya adalah pasangan kedua dari faktornya! 
4. lalu setelah itu tambahkan kedua pasangan faktor tersebut kedalam satu variable string dan gunakan method .length untuk mengetahui panjang digit dari faktornya.
5. Bandingkan panjang strDigit.length dengan minDigit. Jika lebih kecil, update minDigit dengan nilai panjangnya saja (angka).
6. kembalikan mindigit diluar loop atau setelah loop selesai melakukan seluruh pengecekannya

*/
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let minDigit = Infinity;

  for(let i = 1; i <= Math.sqrt(angka); i++){
    if(angka % i === 0) {
      let faktor1 = i;
      let faktor2 = angka / i;

     let strFaktor = String(faktor1) + String(faktor2);
    
     if(strFaktor.length < minDigit) {
      minDigit = strFaktor.length;
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

