//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let result = kalimat.split("");
  for (let i = 0; i < result.length; i++) {
    if (
      result[i] === result[i].toUpperCase() &&
      result[i] !== result[i].toLowerCase()
    ) {
      result[i] = result[i].toLowerCase();
    } else {
      result[i] = result[i].toUpperCase();
    }
  }
  return result.join("");
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
