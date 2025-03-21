function urutkanAbjad(str) {
  // you can only write your code here!
  let splittedStr = str.split("");

  for (let i = 0; i < splittedStr.length; i++) {
    for (let j = 0; j < (splittedStr.length - i - 1); j++) {
      if (splittedStr[j] > splittedStr[j + 1]) {
        let temp = splittedStr[j];
        splittedStr[j] = splittedStr[j + 1];
        splittedStr[j + 1] = temp;
      }
    }
  }
  return splittedStr.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
