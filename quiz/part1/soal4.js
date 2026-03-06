function cariModus(arr) {
  // Step 1: Hitung frekuensi kemunculan setiap angka
  const frequency = {};
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Step 2: Cari frekuensi maksimum dan angka yang paling sering muncul
  let maxFrequency = 0;
  let modus = -1;
  for (let num in frequency) {
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      modus = Number(num); // Konversi kunci objek ke angka
    }
  }

  // Step 3: Periksa kasus khusus
  // Jika hanya ada satu nilai unik, return -1
  const uniqueValues = Object.keys(frequency).length;
  if (uniqueValues === 1) {
    return -1;
  }

  // Jika semua angka memiliki frekuensi yang sama, return -1
  const allSameFrequency = Object.values(frequency).every((freq) => freq === 1);
  if (allSameFrequency) {
    return -1;
  }

  // Step 4: Return modus
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
