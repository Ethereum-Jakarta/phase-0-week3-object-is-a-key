function cariModus(arr) {
  let modus = -1;
  let maxFrekuensi = 1;
  let semuaSama = true;

  for (let i = 0; i < arr.length; i++) {
    let frekuensiSaatIni = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        frekuensiSaatIni++;
      }
      if (arr[i] !== arr[0]) {
        semuaSama = false;
      }
    }
    if (frekuensiSaatIni > maxFrekuensi) {
      maxFrekuensi = frekuensiSaatIni;
      modus = arr[i];
    }
  }
  if (semuaSama === true) {
    return -1;
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
