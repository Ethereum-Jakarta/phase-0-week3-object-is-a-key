// Soal 1
// jika 24, faltornya adalah 1*24, 2*12, 3*8, 4*6  , return 2
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    
    let angkaKali = 0;
    let count = 0;
    let result = Infinity;
    for (let i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            angkaKali = angka / i;
            count = `${i}`.length + `${angkaKali}`.length
            if (count < result) {
                result = count;
            }
        } 
    }
    return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


// Soal 2
console.log(' ');
//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
let abjadArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function urutkanAbjad(str) {
    // you can only write your code here!

    let newStr = [];
    //convert letter ke integer
    for (i = 0; i < str.length; i++) {
        for (let k = 0; k < abjadArray.length; k++) {
            if (str[i] === abjadArray[k]) {
                newStr.push(k);
            }
        }
    }

    //swap integer
    for (i = 0; i < newStr.length; i++) {
        for (let j = 0; j < newStr.length - 1; j++) {
            if (newStr[j] > newStr[j + 1]) {
                [newStr[j], newStr[j+1]] = [newStr[j+1], newStr[j]]
            }
        }                
    }
    
    result = '';
    // return nilai str kembali
    for (i = 0; i < newStr.length; i++) {
        result += abjadArray[newStr[i]];
    }
    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'


// Soal 3
console.log(' ');
//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let newKalimat = '';
    let change = '';
    for (i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == kalimat[i].toLowerCase()) {
            change = kalimat[i].toUpperCase();
        } else {
            change = kalimat[i].toLowerCase();
        }
        // (condition) ? x:y;
        newKalimat += change;
    }
    return newKalimat;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


  // Soal 4

  console.log(' ');
//   Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

// contoh:
// barbarian kenapa bisa true?
// karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

// Spasi juga dianggap sebagai karakter

function checkAB(num) {
  // you can only write your code here!

  // clue : Cek if(num[i] === 'a' && num[i + 4] === 'b') sisanya sebaliknya
  let judgement = false;
  for (i = 0; i < num.length; i++) {
    if(num[i] === 'a' && num[i+4] ==='b') {
        judgement = true;
    } else if (num[i] === 'b' && num[i+4] === 'a') {
        judgement = true;
    }
  }
  return judgement;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false