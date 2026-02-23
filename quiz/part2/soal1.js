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
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let digit_perkalian = [`1${angka}`];


  // temukan beberapa kombinasi perkalian yang bisa jadi faktor dari angka
  for (let i = 2; i < angka; i++) {
    // jika i bisa membagi habis angka artinya i adalah salah satu faktor dari angka
    if (angka % i === 0) {
        let pengali = `${angka / i}`;

        // jika kombinasi perkalian sudah pernah ada maka tidak perlu ditambahkan lagi
        if (i > pengali) break;
        
        // masukkan kombinasi perkalian ke array digit perkalian sebagai string
        digit_perkalian.push(`${i}${pengali}`);
    }
  }

  // cari digit terkecil dalam setiap perkalian
  let digit_terkecil = digit_perkalian[0].length;
  for (const value of digit_perkalian) {
    if (digit_terkecil === 2) break;
    if (digit_terkecil < value.length) continue;
    digit_terkecil = value.length;
  }

  // return digit terkecil dari string kombinasi perkalian faktor angka
  return digit_terkecil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2