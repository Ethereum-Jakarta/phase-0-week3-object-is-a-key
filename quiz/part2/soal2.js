//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  str = str.split("")
  let temp = ""

  for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < str.length - 1; j++) {
      if(str[j] > str[j + 1]) {
        temp = str[j]
        str[j] = str[j + 1]
        str[j + 1] = temp
      }
    }
  }

  return str.join("")
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
