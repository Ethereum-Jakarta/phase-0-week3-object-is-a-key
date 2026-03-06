//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    kalimat = kalimat.split("")
    for (i = 0; i <= kalimat.length -1; i++){
        if (kalimat[i] == kalimat[i].toUpperCase())  kalimat[i] = String(kalimat[i]).toLowerCase();
        else if(kalimat[i] == kalimat[i].toLowerCase()) kalimat[i] = String(kalimat[i]).toUpperCase();
    } 
    return kalimat.join("");
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"