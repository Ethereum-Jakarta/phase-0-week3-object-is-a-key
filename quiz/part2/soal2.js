//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let char = str.split('');
    
    for(let i = 0; i < char.length; i++) {
        for(let j = i; j < char.length; j++) {
            if (char[i] > char[j + 1]) {
                let temp = char[i];
                char[i] = char[j + 1];
                char[j + 1] = temp;
            }
        }
    }

    return char.join('');
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'