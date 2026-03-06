/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    let freq = {};            // Objek untuk menyimpan frekuensi angka
    let max = 0;              // Menyimpan jumlah kemunculan terbanyak
    let modus = null;         // Menyimpan angka modus

    // Gunakan `let` untuk mendeklarasikan indeks `i`
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        // Jika angka belum ada di objek freq, inisialisasi dengan 1
        if (!freq[num]) {
            freq[num] = 1;
        } else {
            freq[num]++; // Jika sudah ada, tambahkan frekuensinya
        }

        // Update modus jika frekuensi angka saat ini lebih besar dari max sebelumnya
        if (freq[num] > max) {
            max = freq[num];
            modus = num;
        }
    }

    // Cek jika semua elemen dalam array sama
    let semuaSama = arr.every((val) => val === arr[0]);
    if (semuaSama || max === 1) {
        return -1;
    }

    return parseInt(modus);
}
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1