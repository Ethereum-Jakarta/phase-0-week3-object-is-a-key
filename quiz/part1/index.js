function angkaPrima(angka) {
    if (angka < 2) return false;
    
    let pembagi = {};
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        pembagi[i] = true;
      }
    }
    
    return Object.keys(pembagi).length === 0;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

  function fpb(angka1, angka2) {
    let faktor1 = {}, faktor2 = {}, fpb = 1;
  
    for (let i = 1; i <= angka1; i++) {
      if (angka1 % i === 0) faktor1[i] = true;
    }
  
    for (let i = 1; i <= angka2; i++) {
      if (angka2 % i === 0) faktor2[i] = true;
    }
  
    for (let key in faktor1) {
      if (faktor2[key]) fpb = Math.max(fpb, Number(key));
    }
  
    return fpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
  
  function cariMedian(arr) {
    let sorted = {};
    arr.forEach(num => sorted[num] = true);
    let uniqueArr = Object.keys(sorted).map(Number).sort((a, b) => a - b);
    
    let mid = Math.floor(uniqueArr.length / 2);
    return uniqueArr.length % 2 === 0 ? (uniqueArr[mid - 1] + uniqueArr[mid]) / 2 : uniqueArr[mid];
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  
  function cariModus(arr) {
    let frekuensi = {}, maxCount = 0, modus = -1;
  
    for (let num of arr) {
      frekuensi[num] = (frekuensi[num] || 0) + 1;
    }
  
    for (let key in frekuensi) {
      if (frekuensi[key] > maxCount && frekuensi[key] < arr.length) {
        maxCount = frekuensi[key];
        modus = Number(key);
      }
    }
  
    return maxCount > 1 ? modus : -1;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  
  function ubahHuruf(kata) {
    let abjad = {};
    let hasil = "";
  
    for (let i = 0; i < 26; i++) {
      abjad[String.fromCharCode(97 + i)] = String.fromCharCode(97 + ((i + 1) % 26));
    }
  
    for (let huruf of kata) {
      hasil += abjad[huruf];
    }
  
    return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  