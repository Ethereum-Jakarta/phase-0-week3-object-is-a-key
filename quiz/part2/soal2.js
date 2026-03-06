//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
   const arr = [...str];
   let code = arr.map((e) => {
      return e.charCodeAt();
   })
   
   const n = code.length;
   let swapped;
   
   for (let i = 0; i < n; i++) {
      swapped = false;
      
      for (let j = 0; j < n - i - 1; j++) {
         if (code[j] > code[j + 1]) {
            let temp = code[j];
            code[j] = code[j + 1];
            code[j + 1] = temp;
            swapped = true;
         }
      }
      
      if (!swapped) {
         break;
      }
   }
   
   let hasil = code.map((e) => {
      return String.fromCharCode(e);
   })
   return hasil.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'