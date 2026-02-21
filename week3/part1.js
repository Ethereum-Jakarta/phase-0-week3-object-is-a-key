// # Logic Challenge tanpa tipe data object | Part 1

// Sabar jangan langsung ke object dulu, kalian harus asah logic lagi wkwk

// ## Soal 1
// ```js
// //cek apakah angka yang dikirim adalah angka prima atau bukan?
// //cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {

  if(angka === 2){
    return true
  } else {
    if(angka === 3){
      return true
    } else 
    if(angka === 5){
      return true
    } else {
      if(angka === 11){
        return true
      }
    }
  }

  if(angka % 2 === 0){
    return false
  } else {
    if(angka % 3 === 0){
      return false
    } else {
      if(angka % 5 === 0){
        return false
      } else {
        if(angka % 11 === 0){
          return false
        } else {
          return true
        }
      }
    }
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
// ```
// ## Soal 2
// ```js
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  let sorting = []
  for(i = 0; i < angka1 + angka2; i++){
    if(angka1 % i === 0){
      sorting.push(i)
    }
    if(angka2 % i === 0){
      sorting.push(i)
    }
  }
  let fpb = []
  for(j = 0; j < sorting.length; j++){
    if(sorting[j] === sorting[j+1]){
      fpb.push(sorting[j])
    }
  }

  return Math.max(...fpb)
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(15, 23)); // 1
// ```
// ## Soal 3
// ```js
function cariMedian(arr) {
  if(arr.length % 2 === 1){
    let cekAngka = arr.length / 2
    let pembulatan = Math.floor(cekAngka)
    return arr.at(pembulatan)
  } else {
    let angka2 = arr.length / 2
    let angka1 = angka2 - 1
    let cariAngka1 = arr.at(angka1)
    let cariAngka2 = arr.at(angka2)
    return (cariAngka1 + cariAngka2) / 2
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
// ```

// ## Soal 4
// ```js
// /*
// Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
// Function akan me-return modus dari array atau deret angka tersebut. 
// Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
// Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. 
// Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
// Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
// */
function cariModus(arr) {
  let sorting = []
  for(i = 0; i < arr.length; i++){
    for(j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        sorting.push(arr[i])
        break;
      }
    }
  }
  let modus;
  if(!sorting.length){
    modus = -1
  } else if(sorting[0] === sorting[1]){
    modus = -1
  } else if(sorting.length >= 1){
    modus = sorting[0]
  } 

  return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
// ```
// ## Soal 5
// ```js
// //sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
// //intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  let splitStr = kata.split('')
  let toNum = []
  for(i = 0; i < kata.length; i++){
    toNum.push(splitStr[i].charCodeAt(0))
  }
  let toStr = []
  for(j = 0; j < kata.length; j++){
    toStr.push(String.fromCharCode(toNum[j] + 1))
  }

  return toStr.join('')
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
// ```