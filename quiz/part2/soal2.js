//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let huruf = str.split('');

    for(let i = 0; i < huruf.length; i++) {
      for (let j = 0; j < huruf.length - i - 1; j++) {
        if (huruf[j] > huruf[j + 1]) {
          let tmp = huruf[j];
          huruf[j] = huruf[j + 1];
          huruf[j + 1] = tmp;
        }
      }
    }
    return huruf.join("");
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'