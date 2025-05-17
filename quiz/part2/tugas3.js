// Soal 3
//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  let kata = kalimat.split("");
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === kata[i].toUpperCase()) {
      kata[i] = kata[i].toLowerCase();
    } else {
      kata[i] = kata[i].toUpperCase();
    }
}
return kata.join("")
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
