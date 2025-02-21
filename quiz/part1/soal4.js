function cariModus(arr) {
  let frequency = {};

  // Hitung frekuensi kemunculan setiap angka
  for (let num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  // Jika hanya ada 1 nilai unik atau semua angka muncul hanya sekali, tidak ada modus
  if (Object.keys(frequency).length === 1) return -1;
  let maxFreq = 0;
  for (let key in frequency) {
    if (frequency[key] > maxFreq) {
      maxFreq = frequency[key];
    }
  }
  if (maxFreq === 1) return -1;

  // Cari semua angka yang memiliki frekuensi tertinggi
  let candidates = [];
  for (let key in frequency) {
    if (frequency[key] === maxFreq) {
      candidates.push(Number(key));
    }
  }

  // Jika lebih dari satu kandidat, pilih yang muncul pertama kali di array
  if (candidates.length > 1) {
    for (let num of arr) {
      if (candidates.includes(num)) {
        return num;
      }
    }
  }

  // Jika hanya satu kandidat, kembalikan kandidat tersebut
  return candidates[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
