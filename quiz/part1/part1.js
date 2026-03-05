function angkaPrima(angka) {
  if (angka < 2) return false;
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) return false;
  }
  return true;
}

console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));

function fpb(angka1, angka2) {
  while (angka2 !== 0) {
    let temp = angka2;
    angka2 = angka1 % angka2;
    angka1 = temp;
  }
  return angka1;
}

console.log(fpb(12, 16));
console.log(fpb(50, 40));
console.log(fpb(22, 99));
console.log(fpb(24, 36));
console.log(fpb(17, 23));

function cariMedian(arr) {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  }
  return arr[mid];
}

console.log(cariMedian([1, 2, 3, 4, 5]));
console.log(cariMedian([1, 3, 4, 10, 12, 13]));
console.log(cariMedian([3, 4, 7, 6, 10]));
console.log(cariMedian([1, 3, 3]));
console.log(cariMedian([7, 7, 8, 8]));

function cariModus(arr) {
  const freq = {};
  let maxFreq = 0;
  let modus = -1;
  
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      modus = num;
    } else if (freq[num] === maxFreq) {
      modus = -1;
    }
  }
  
  if (maxFreq === 1 || modus === -1) return -1;
  return modus;
}

console.log(cariModus([10, 4, 5, 2, 4]));
console.log(cariModus([5, 10, 10, 6, 5]));
console.log(cariModus([10, 3, 1, 2, 5]));
console.log(cariModus([1, 2, 3, 3, 4, 5]));
console.log(cariModus([7, 7, 7, 7, 7]));

function ubahHuruf(kata) {
  let result = '';
  for (let char of kata) {
    let code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      let newCode = code === 122 ? 97 : code + 1;
      result += String.fromCharCode(newCode);
    }
  }
  return result;
}

console.log(ubahHuruf('wow'));
console.log(ubahHuruf('developer'));
console.log(ubahHuruf('javascript'));
console.log(ubahHuruf('keren'));
console.log(ubahHuruf('semangat'));
