function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  const lowerCase = "abcdefghijklmnopqrstuvwqyz"; 
  let result = "";
  for (const alp of kalimat) {
    if (lowerCase.includes(alp)) {
      result += alp.toUpperCase();
    } else {
      result += alp.toLowerCase();
    }
  }
  return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
