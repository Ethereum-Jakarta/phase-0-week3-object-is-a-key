//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let pisah = kalimat.split("");
  let hasil = [];

  for(let i = 0; i < pisah.length; i++){
    if(pisah[i] !== pisah[i].toUpperCase()){
      let besar = pisah[i].toUpperCase();
      hasil.push(besar);
    } else {
      let kecil = pisah[i].toLowerCase();
      hasil.push(kecil);
    }
  }
  return hasil.join("");
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

