
//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let n = str.length;
  str = str.split("");
  for (let i = 0; i < n;i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (str[j] < str[minIndex]) {
            minIndex = j;
        }
    }
    [str[i],str[minIndex]] = [str[minIndex], str[i]];
  }
  str = str.join("");
  return str;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'