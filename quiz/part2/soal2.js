//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let result = str.split("");
  for (let i = 0; i < result.length; i++) {
    let temp = result[i];
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < temp) {
        temp = result[j];
        result[j] = result[i];
        result[i] = temp;
      }
    }
  }
  return result.join('');
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
