function urutkanAbjad(str) {
    // you can only write your code here!
    let arr = str.split('')
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if (arr [j] > arr [j + 1] ) {
                let temp = arr [j] ;
                arr [j] = arr [j+1];
                arr [j+1] = temp;
            }
  
        }
    
    }
  return arr.join('');
    
}

  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis'));