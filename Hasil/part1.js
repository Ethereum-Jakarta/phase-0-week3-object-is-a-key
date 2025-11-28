//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  if (angka <= 1) {
    return false; 
  }

  for (let i = 2; i * i <= angka; i++) {
    if (angka % i === 0) {
        return false; 
    }
  }
  return true; 
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  if (angka2 === 0) {
    return angka1
  } else {
 return fpb(angka2, angka1 % angka2)
  }
  }

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

function cariMedian(arr) {
  if (arr.length === 0) {
    return 0 
  }
  let sum = arr.reduce((a,b) => a + b, 0); //reduce digunakan untuk mereduksi array menjadi nilai tunggal 
  mean = sum / arr.length; 
  let kalikan = mean * 2 
  let round = Math.round(kalikan)
  return round/2;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

function cariModus(arr) {
 if(arr.length === 0) {
  return [];
 }

 const first = arr[0];
 const allsame = arr.every(item => item === first);
 if (allsame) {
   return -1
 }
 
 const frekuensi = {};
 
 arr.forEach(item => {
  frekuensi[item] = (frekuensi[item] || 0) + 1; 
 });

 let maxFrekuensi = 0;

 for (let item in frekuensi) {
  if (frekuensi[item] > maxFrekuensi) {
    maxFrekuensi = frekuensi[item] 
  }
 }

  if (maxFrekuensi === 1 && arr.length > 1) {
    return -1;  
  }
  
  const candidates = [];

  for (let item in frekuensi) {
    if (frekuensi[item] === maxFrekuensi) {
      candidates.push(Number(item));
    }
  }

  let selected = null;
  let minindex = Infinity;

  candidates.forEach(candidate=> {
    const index = arr.indexOf(candidate);
    if (index < minindex) {
      minindex = index;
      selected = candidate
    }
  });
  return selected;
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

function ubahHuruf(kata) {
  let result = ''; // untuk menyimpan satu string kosong

  for (let i = 0; i < kata.length; i++) { //untuk mengiterasikan setiap string yang ada
    let word = kata[i] //ambil karakter saat ini
    let kode = kata.charCodeAt(i); //dapetkan kode ASCII, ini dibutuhkan karena untuk memanipulasi huruf berdasarkan code ASCII untuk menggeser huruf

    if (word >= `a` && word <= `z`) {
      if (word === `z`) { 
        result += `a`; 
      } else {
        result += String.fromCharCode(kode + 1) 
      } 
    } else if (char >= `A` && char <= `Z`) {
      if (char === `Z`) {
        result += `A`;
        } else {
          result += String.fromCharCode(kode + 1) 
        }
      } else {
        result += char;
      }
    }
    return result;
  }


// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu