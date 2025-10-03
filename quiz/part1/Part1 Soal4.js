function cariModus(arr) {
  let frekuensi = {};
  let maxCount = 0;
  let modus = -1;

  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];
    if (!frekuensi[angka]) {
      frekuensi[angka] = 1;
    } else {
      frekuensi[angka]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];
    if (frekuensi[angka] > maxCount) {
      maxCount = frekuensi[angka];
      modus = angka;
    }
  }

  if (maxCount === 1) {
    return -1;
  }
  if (maxCount === arr.length) {
    return -1;
  }

  return modus;
}

console.log(cariModus([10, 4, 5, 2, 4]));
console.log(cariModus([5, 10, 10, 6, 5]));
console.log(cariModus([10, 3, 1, 2, 5]));
console.log(cariModus([1, 2, 3, 3, 4, 5]));
console.log(cariModus([7, 7, 7, 7, 7]));
