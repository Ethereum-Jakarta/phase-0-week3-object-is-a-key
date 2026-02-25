/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    // you can only write your code here!
    arr.sort((a, b) => a - b);

    let maxCount = 0;
    let currentCount = 1;
    let modus = -1;
    let modeCount = 0;

    // Lakukan pencarian linear setelah array diurutkan
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            // Jika angka sama, tambah count
            currentCount++;
        } else {
            // Jika angka berbeda, reset count dan periksa apakah lebih besar dari maxCount
            if (currentCount > maxCount) {
                maxCount = currentCount;
                modus = arr[i - 1];
                modeCount = 1;
            } else if (currentCount === maxCount) {
                modeCount++;
            }
            currentCount = 1;
        }
    }

    // Periksa jika angka terakhir juga merupakan modus
    if (currentCount > maxCount) {
        maxCount = currentCount;
        modus = arr[arr.length - 1];
        modeCount = 1;
    } else if (currentCount === maxCount) {
        modeCount++;
    }

    // Jika ada hanya satu modus (semua angka sama), return -1
    if (maxCount === arr.length || modeCount > 1) {
        return -1;
    }

    return modus;
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1