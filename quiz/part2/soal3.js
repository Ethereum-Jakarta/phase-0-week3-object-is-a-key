//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    let kapital = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let kecil = "qwertyuiopasdfghjklzxcvbnm"
    let res = ""

    for (let i = 0; i < kalimat.length; i++) {
        if (kapital.includes(kalimat[i])) {
            res += kalimat[i].toLowerCase()
        } else if (kecil.includes(kalimat[i])) {
            res += kalimat[i].toUpperCase()
        } else {
            res += kalimat[i]
        }
  } return res;
}
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"