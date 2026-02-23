//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  const new_kalimat = kalimat.split("");

  for (let key in new_kalimat) {
    // kalo cuma spasi yaudah skip aja
    if (new_kalimat[key] === " ") continue;

    // kalo huruf besar ganti jadi kecil, kalo kecil ganti jadi besar
    new_kalimat[key] = (new_kalimat[key] === new_kalimat[key].toUpperCase()) ? new_kalimat[key].toLowerCase() : new_kalimat[key].toUpperCase();
  }

  return new_kalimat.join("");
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"