function tukarBesarKecil(kalimat) {
  let hasil = "";

  for (let i = 0; i < kalimat.length; i++) {
    let char = kalimat[i];

    if (char === char.toUpperCase()) {
      hasil += char.toLowerCase();
    } else {
      hasil += char.toUpperCase();
    }
  }

  return hasil;
}

console.log(tukarBesarKecil("Hello World"));
console.log(tukarBesarKecil("I aM aLAY"));
console.log(tukarBesarKecil("My Name is Bond!!"));
console.log(tukarBesarKecil("IT sHOULD bE me"));
console.log(tukarBesarKecil("001-A-3-5TrdYW"));
