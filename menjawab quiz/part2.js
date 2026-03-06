//SOAL KE-1

/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
  let result = [];
  let result2 = [];

  for (let i = 1; i <= angka; i++ ){
    for (let j = 1; j <= angka; j++){
      if (i * j === angka) {
        result2.push(`${i}${j}`);
      }
    }
  }
  for (let i = 0; i < result2.length; i++) {
    result.push(result2[i].length);
  }

  return Math.min(...result);
}
  
// TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3 
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2




//SOAL KE-2

//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  let bankHuruf = "abcdefghijklmnopqrstuvwxyz";
  let bankKata = [];
  for (let i = 0; i < str.length; i++) {
    bankKata.push(str[i]);
  }
  
  // console.log(bankKata);
  for (let j = 0; j < str.length; j ++) {
    for (let i = 0; i < str.length - 1; i++) {
      if (bankHuruf.indexOf(bankKata[i]) > bankHuruf.indexOf(bankKata[i + 1])) {
        let sementara = bankKata[i];
        bankKata[i] = bankKata[i + 1];
        bankKata[i + 1] = sementara;
      }
    }
  }
  return bankKata.join("");
}

// TEST CASES
// console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'



//SOAL KE-3

//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  let bankHurufKecil = "abcdefghijklmnopqrstuvwxyz";
  let bankHurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = kalimat.split("");

  for (let i = 0; i < result.length; i++) {
    if (bankHurufKecil.includes(result[i])) {
      result[i] = result[i].toUpperCase();
    } else if (bankHurufBesar.includes(result[i])) {
      result[i] = result[i].toLowerCase();
    }
  }
  return result.join("");
}

// TEST CASES
// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"





//SOAL KE-4

/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
  let indexA = [];
  let indexB = [];
  

  for (let i = 0; i < num.length; i++){
    if (num[i] === 'a') {
      indexA.push(i);
    } else if (num[i] === 'b') {
      indexB.push(i);
    }
  }

  if (indexA.length === 0 || indexB.length === 0){
    return false;
  }
  console.log(indexA);
  console.log(indexB);

  for (let i = 0; i < indexA.length; i++) {
    let count = 0;
    for (let j = 0; j < indexB.length; j++) {
      count = Math.abs(indexA[i] - indexB[j]);
      // console.log(count);
      if (count === 4) {
        return true;
      }
    }
  }
  return false;
}

// TEST CASES
// console.log(checkAB('lane borrowed')); // true
// console.log(checkAB('i am sick')); // false
// console.log(checkAB('you are boring')); // true
// console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

// let sembarang = 'barbarian';

// console.log(sembarang.indexOf('r'))