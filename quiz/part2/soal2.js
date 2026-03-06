function urutkanAbjad(str) {
  let kata = str.split('')
  for (let i = 0; i < str.length - 1; i++) {
      for (let j = 0; j < str.length - 1; j++) {
          if (kata[j] > kata[j+1]) {
              let temp = kata[j] //Tukar posisi
              kata[j] = kata[j+1]
              kata[j+1] = temp
          }
      }
  }
  return kata.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'