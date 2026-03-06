//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const mapLower = {};
  for (let i = 0; i < alphabetLowerCase.length; i++) {
    mapLower[alphabetLowerCase[i]] = alphabetUpperCase[i];
  }

  const mapUpper = {};
  for (let i = 0; i < alphabetUpperCase.length; i++) {
    mapUpper[alphabetUpperCase[i]] = alphabetLowerCase[i];
  }

  let result = "";

  for (let i = 0; i < kalimat.length; i++) {
    const char = kalimat[i];

    if (mapLower[char]) {
      result += mapLower[char];
    } else if (mapUpper[char]) {
      result += mapUpper[char];
    } else {
      result += char;
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