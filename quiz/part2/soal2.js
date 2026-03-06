//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let tampung = str.split('');

    for (let i = 0; i < str.length-1; i++) {
      for (let j = 0; j < str.length-1; j++) {
        // Membandingkan elemen saat ini dengan elemen berikutnya
        if (tampung[j].charCodeAt(0) > tampung[j+1].charCodeAt(0)) {
          // Mengganti elemen
          let temp = tampung[j];
          tampung[j] = tampung[j + 1];
          tampung[j + 1] = temp;
        }
      }
    }

    return tampung.join('');
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'