function tukarBesarKecil(kalimat) {
    let kata = kalimat.split('') //memisahkan satu persatu karakter menjadi array
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] === kata[i].toUpperCase()) {
            kata[i] = kata[i].toLowerCase() //Ubah huruf besar menjadi kecil
        } else {
            kata[i] = kata[i].toUpperCase() //Ubah huruf kecil menjadi besar
        }
    return kata.join(''); //pake .join untuk menyambungkan array menjadi kalimat
  }
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"