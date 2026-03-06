//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let abjad = str.split("");
  for (let i = 0; i < abjad.length; i++) {
    for (let j = 0; j < abjad.length - 1; j++) {
      if (abjad[j] > abjad[j + 1]) {
        [abjad[j], abjad[j + 1]] = [abjad[j + 1], abjad[j]];
      }
    }
  }
  return abjad.join("");
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
