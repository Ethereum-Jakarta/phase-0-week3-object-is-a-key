/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    const kemunculan = {};
    let maxKem = 0;
    let modus = -1;

    for (let num of arr) { // Menghitung frekuensi kemunculan setiap angka
        kemunculan[num] = (kemunculan[num] || 0) + 1;
    }

    for (let num in kemunculan) { // Menentukan modus berdasarkan nilai frekuensi maksimum
        if (kemunculan[num] > maxKem) {
            maxKem = kemunculan[num];
            modus = parseInt(num); // Memastikan nilai diubah ke tipe angka
        }
    }

    // Memastikan kasus di mana tidak ada modus
    const allSameFrequency = Object.keys(kemunculan).length === 1 || maxKem === 1;
    if (allSameFrequency) {
        return -1;
    }

    return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // Output: 4
console.log(cariModus([5, 10, 10, 6, 5])); // Output: 5
console.log(cariModus([10, 3, 1, 2, 5])); // Output: -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // Output: 3
console.log(cariModus([7, 7, 7, 7, 7])); // Output: -1, untuk case ini saya pake bantuan AI bang, ga nemu contoh kasusnya, dan berakhir minta bantu AI.


