/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array 
atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, 
modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus,
tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai 
yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    // you can only write your code here!
    arr.sort((a, b) => a - b);              //urutkan angka

    let count = 1;                          //untuk menghitung jumlah kemunculan angka
    let maxCount = 0;                       //menyimpan jumlah kemunculan terbanyak
    let modus = -1;                         //variabel untuk menyimpan modus

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;                        //jika angka yang sama ditemukan, tambahkan count
        } else {
            if (count > maxCount) {
                maxCount = count;           //simpan jumlah kemunculan terbanyak
                modus = arr[i - 1];         //simpan angka yang sering muncul
            }
            count = 1;                      //reset count untuk angka baru
        }
    }

    if (count > maxCount) {                 //cek angka terakhir dalam array
        maxCount = count;
        modus = arr[arr.length - 1];
    }

    if (maxCount === arr.length) {      // Jika semua angka sama, return -1
        return -1;
    } else if (maxCount < 2) {              //jika tidak ada angka yang sama, return -1
        return -1;
    } else {
        return modus;
    }

    // Jika tidak ada angka yang muncul lebih dari 1 kali, return -1

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1