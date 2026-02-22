//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    let breakSentences = str.split('');

    for (let i = 0; i < breakSentences.length; i++) {
        for (let j = 0; j < breakSentences.length - 1; j++) {
            if (breakSentences[j] > breakSentences[j + 1]) {
                [breakSentences[j], breakSentences[j + 1]] = [breakSentences[j + 1], [breakSentences[j]]];
            }
        }
    }
    return breakSentences.join('');
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'