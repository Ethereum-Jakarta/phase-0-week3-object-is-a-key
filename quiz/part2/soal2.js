function urutkanAbjad(str) {
  let pisah = str.split('')
  for(let i = 0; i < pisah.length-1; i++){
    for(let j = 0; j < pisah.length -1 -i; j++){
        if(pisah[j] > pisah[j+1]){
            let tempat = pisah[j];
            pisah[j] = pisah[j+1]
            pisah[j+1] = tempat
        }
    }
  }
  return pisah.join('')
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'