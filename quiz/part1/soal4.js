function cariModus(arr) {
    let tabelFrekuensi = {};
    let nilaiMax = 0;
    let modus = [];

    for (let num of arr) {
      tabelFrekuensi[num] = (tabelFrekuensi[num] || 0) + 1;

      if (tabelFrekuensi[num] > nilaiMax) {
        nilaiMax = tabelFrekuensi[num]
        modus = num
      }
    }

    if (nilaiMax === 1) {
      return -1;
    }

    if (Object.keys(tabelFrekuensi).length === 1) {
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