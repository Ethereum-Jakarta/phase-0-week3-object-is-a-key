//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let pecah = str.split("");
  
  for(let i = 0; i < pecah.length; i++){
        for(let j = 0; j < pecah.length + 1; j++){
            if(pecah[j] > pecah[j+1]){
                let temp = pecah[j];
                pecah[j] = pecah[j + 1];
                pecah[j + 1] = temp;
            }
        }
    }
    return pecah.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'