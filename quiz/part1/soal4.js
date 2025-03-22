function cariModus(arr) {
  let cari = {}; 

  
  for (let num of arr) {
      cari[num] = (cari[num] || 0) + 1;
  }

  let maxCari = 0;
  let modus = -1;

  
  for (let num in cari) {
      if (cari[num] > maxCari) {
          maxCari = cari[num];
          modus = Number(num);
      }
  }

  
  if (maxCari === 1 || Object.keys(cari).length === 1) {
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
