//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  /**
   * Mengubah string menjadi array
   * 1. Menggunakan metode split    const arr = str.split("")
   * 2. Menggunakan spread operator const arr = [...str];
   * 3. Menggunakan for loop atau for of
   */
  const arr = [];

  for (const char of str) {
    arr.push(char);
  }

  /**
   * Algoritma Bubble Sort
   * 1. Buat sebuah flag, untuk menunjukkan status apakah ada pertukaran atau tidak
   * 2. Buat perulangan do-while yang mengiterasi array sampai array diurutkan
   * 3. Pada setiap iterasi, ubah flag menjadi false
   * 4. Buat perulangan for untuk membandingkan elemen array yang berdekatan, tukar posisinya berdasarkan kondisi
   * 5. Ulangi perulangan sampai tidak ada lagi elemen untuk ditukar posisinya
   */
  let swapped; // flag

  // perulangan akan dilakukan setidaknya 1x, bahkan jika array sudah diurutkan
  do {
    swapped = false; // ubah flag menjadi false karena belum ada pertukaran pada iterasi sekarang
    // perulangan untuk membandingkan setiap elemen array dengan elemen array setelahnya
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) { // jika elemen lebih besar dari elemen setelahnya, tukar posisinya
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true; // ubah flag menjadi true karena ada pertukaran dan menandakan array belum selesai diurutkan
      }
    }
    // perulangan akan terus berjalan ketika flag swapped bernilai true sampai seluruh elemen array terurut
    // jika tidak ada pertukaran (flag swapped tetap bernilai false), berarti array sudah terurut, dan perulangan dihentikan
  } while (swapped);

  /**
   * Mengembalikan array yang sudah diurutkan menjadi string
   * 1. Menggunakan metode join     const string = arr.join("");
   * 2. Menggunakan for loop atau for of
   */
  let sortedString = "";

  for (const char of arr) {
    sortedString += char;
  }

  return sortedString;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'