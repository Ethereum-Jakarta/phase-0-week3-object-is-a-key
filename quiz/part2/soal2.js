//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // Ubah string menjadi array agar mudah dimanipulasi
  const arr = str.split('');
  const n = arr.length;
  
  // Looping utama untuk mengulang proses sorting
  for (let i = 0; i < n - 1; i++) {
    // Looping kedua untuk membandingkan dan menukar elemen
    for (let j = 0; j < n - i - 1; j++) {
      // Jika elemen saat ini lebih besar dari elemen berikutnya
      // (berdasarkan urutan abjad), maka tukar posisinya
      if (arr[j] > arr[j + 1]) {
        // Proses swapping
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Gabungkan array kembali menjadi string dan kembalikan hasilnya
  return arr.join('');
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
