//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!

  let hasil_tukar = "";
  
  for (let i = 0; i < kalimat.length; i++) {
    for (let besar = 65; besar < 91; besar++) {
      if (kalimat[i] === String.fromCharCode(besar)) {
        hasil_tukar += kalimat[i].toLowerCase();
      }
    }
    for (let kecil = 97; kecil <= 122; kecil++) {
      if (kalimat[i] === String.fromCharCode(kecil)) {
        hasil_tukar += kalimat[i].toUpperCase();
      }
    }
    for (let tanda = 33; tanda <= 45; tanda++) {
      if (kalimat[i] === String.fromCharCode(tanda)) {
        hasil_tukar += kalimat[i];
      }
    }
    for (let angka = 0; angka <= 9; angka++) {
      if (kalimat[i] === `${angka}`) {
        hasil_tukar += kalimat[i];
      }
    }
    if (kalimat[i] === " ") {
      hasil_tukar += kalimat[i];
    }
  }
  return hasil_tukar;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"