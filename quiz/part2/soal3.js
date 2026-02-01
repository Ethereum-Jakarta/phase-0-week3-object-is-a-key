//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
let char = kalimat.split('');

for(let i = 0; i < char.length; i++) {
    if(char[i] === char[i].toUpperCase()) {
        char[i] = char[i].toLowerCase();
    } else {
        char[i] = char[i].toUpperCase();
    }
}
return char.join('')
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"