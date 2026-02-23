//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let sorted_array = [];

  let abjad = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // konversi huruf yang ada di str jadi array berisi urutan setiap huruf dalam abjad
  let num_str = [];
  for (let j = 0; j < str.length; j++) {
    num_str.push(abjad.indexOf(str[j]));
  }

  // proses sorting
  let dup_num_str = num_str.slice();
  for (let i = 0; i < num_str.length; i++) {
    let urutan_terkecil_terakhir = 0;

    // susun setiap data yang ada di dup_num_str kedalam sorted_array secara ascending
    for (let j = 0; j < dup_num_str.length; j++) {
        if (sorted_array[i] > dup_num_str[j]) {
            sorted_array[i] = dup_num_str[j];
            urutan_terkecil_terakhir = j;
            continue;
        } 
        if (sorted_array[i] === undefined) {
            sorted_array.push(dup_num_str[j]);
        }
    }
    
    // hapus angka terkecil yang terakhir ditemukan di dum_num_str
    dup_num_str.splice(urutan_terkecil_terakhir, 1);
  }

  // konversi angka urutan huruf dalam sorted_array jadi abjad
  for (let index in sorted_array) {
    sorted_array[index] = abjad[sorted_array[index]];
  }

  // return sorter_array yang awalnya array berisi urutan setiap huruf
  // jadi satu kata utuh dengan join("")
  return sorted_array.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'