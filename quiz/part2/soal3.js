//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    return kalimat.split('').map(char => // fungsi map untuk menjalankan fungsi pada setiap karakter dalam Array, SC : AI.
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() // mengecek jika char huruf besar, jika ya akan diubah menjadi kecil dengan char.toLowerCase.
    ).join('');  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"