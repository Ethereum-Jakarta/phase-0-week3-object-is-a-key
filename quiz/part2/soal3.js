//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    let kalimatBaru = '';

    for (let i = 0; i < kalimat.length; i++){
        let kata = '';
        if (kalimat[i] === kalimat[i].toUpperCase()){
            kata = kalimat[i].toLowerCase();
        } else {
            kata = kalimat[i].toUpperCase();
        }
        kalimatBaru += kata;
    }
return kalimatBaru;
}
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"