//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(s) {
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      s[i] = s[i].toLowerCase();
    } else {
      s[i] = s[i].toUpperCase();
    }
  }

  return s.join("");
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
