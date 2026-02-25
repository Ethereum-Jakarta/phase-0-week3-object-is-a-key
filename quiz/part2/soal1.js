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

function digitPerkalianMinimum(angka){
    let minDigits = Infinity; // Menginisialisasi dengan angka terbesar yang mungkin

    // Mencari semua pasangan faktor
    for (let i = 1; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            let faktor1 = i;
            let faktor2 = angka / i;
            
            // Menghitung jumlah digit dari hasil perkalian faktor1 dan faktor2
            let hasilPerkalian = faktor1 * faktor2;
            let digitCount = (hasilPerkalian + '').length; // Menghitung jumlah digit
            
            // Menyimpan jumlah digit minimum
            if (digitCount < minDigits) {
                minDigits = digitCount;
            }
        }
    }
    return minDigits;
}

console.log(digitPerkalianMinimum(24));
console.log(digitPerkalianMinimum(60));