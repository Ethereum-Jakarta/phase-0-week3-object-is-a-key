function cariModus(arr) {
  // you can only write your code here!
  var freq = {};
  var maxCount = 0;
  var modus = -1;

  // Hitung frekuensi setiap angka
  for (var i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    if (freq[arr[i]] > maxCount) {
      maxCount = freq[arr[i]];
    }
  }

  // Jika semua angka sama atau semua angka unik
  if (maxCount === arr.length || maxCount === 1) {
    return -1;
  }

  // Cari modus pertama yang muncul
  for (var j = 0; j < arr.length; j++) {
    if (freq[arr[j]] === maxCount) {
      modus = arr[j];
      break;
    }
  }

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
