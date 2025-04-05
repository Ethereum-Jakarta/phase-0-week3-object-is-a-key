//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let kata = kalimat.split("");

  let hasil = kata.map((key) => {
    if (key === key.toUpperCase()) {
      return key.toLowerCase();
    } else if (key === key.toLowerCase()) {
      return key.toUpperCase();
    }
  });

  return hasil.join("");
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
