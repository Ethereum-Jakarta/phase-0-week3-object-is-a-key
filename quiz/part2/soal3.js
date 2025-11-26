function tukarBesarKecil(kalimat) {
    let pisah = kalimat.split('')
    let ubah = ''

  for(let i = 0; i < pisah.length; i++){
    if(pisah[i].charCodeAt() > 90){
        ubah += pisah[i].toUpperCase()
    } else {
        ubah += pisah[i].toLowerCase()
    }
  }
  return ubah
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
