//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let result = "";
  let arr = [];

  //looping untuk ubah setiap karakter menjadi kode sistem => push ke arr
  for (let i = 0; i < str.length; i++) {
    let kodeHuruf = str[i].charCodeAt();
    arr.push(kodeHuruf);
  }

  //looping untuk bubble sorting
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  //looping untuk ubah setiap kode sistem menjadi karakter => push ke result
  for (let a of arr) {
    let huruf = String.fromCharCode(a);
    result += huruf;
  }

  return result;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
