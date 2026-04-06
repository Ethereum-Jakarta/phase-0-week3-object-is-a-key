// ## Soal 2
// ```js
//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  let kata = str.split("");
  let hurufUrut = "";

  for (let i = 0; i < str.length; i++) {
    let hurufTerkecil = kata[0];
    let indeksTerkecil = 0;

    for (let j = 0; j < kata.length; j++) {
      if (kata[j] < hurufTerkecil) {
        hurufTerkecil = kata[j];
        indeksTerkecil = j;
      }
    }
    hurufUrut += hurufTerkecil;
    kata.splice(indeksTerkecil, 1);
  }
  return hurufUrut;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
