//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let kata_angka = [];
  for (let i = 0; i < str.length; i++) {
    let pertama = str[i];
    for (let huruf = 97; huruf <= 122; huruf++) {
      if (pertama === String.fromCharCode(huruf)) {
        pertama = huruf;
      }
    }
    kata_angka.push(pertama);
  }

  let t = 0;
  for (let i = 0; i < kata_angka.length; i++) {
    let terkecil = i;
    for (let j = i + 1; j < kata_angka.length; j++) {
      if (kata_angka[terkecil] > kata_angka[j]) {
        terkecil = j;
      }
    }
    t = kata_angka[i];
    kata_angka[i] = kata_angka[terkecil];
    kata_angka[terkecil] = t;
  }
  
  let hasil = "";
  for (let i = 0; i < kata_angka.length; i++) {
    for (let huruf = 97; huruf <= 122; huruf++) {
      if (kata_angka[i] === huruf) {
        hasil += String.fromCharCode(huruf);
      }
    }
  }
  return hasil;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'