// Soal 3
// TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let arr = kalimat.split("");
  let newArr = [];
  arr.forEach((letter) => {
    if (letter === letter.toUpperCase()) newArr.push(letter.toLowerCase());
    else newArr.push(letter.toUpperCase());
  });
  return newArr.join("");
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"

console.log(""); // end soal 3
