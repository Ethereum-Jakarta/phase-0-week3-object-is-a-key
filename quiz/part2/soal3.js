//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  let kata = kalimat.split("");
  let kataBaru = kata.map((char) => {
    // point penting : gunakan toUpperCase() dan toLowerCase()
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      //untuk mengubah huruf ke besar atau kecil karena string, apabila kita hanya menambahkan kondisi yang benar(char === char.toUpperCase()) maka pada kondisi salah juga akan dianggap true
      return char.toLowerCase();
    } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      return char.toUpperCase();
    } else {
      // jika bukan huruf besar atau kecil kembalikan saja seperti semula
      return char;
    }
  });
  return kataBaru.join("");
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
