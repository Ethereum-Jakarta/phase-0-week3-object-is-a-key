/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(str) {
    // you can only write your code here!
    let posisiA = [];
    let posisiB = [];
    
    // Loop untuk mencari posisi huruf 'a' dan 'b'
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            posisiA.push(i);
        } else if (str[i] === 'b') {
            posisiB.push(i);
        }
    }

    // Memeriksa jarak antara 'a' dan 'b'
    for (let i = 0; i < posisiA.length; i++) {
        for (let j = 0; j < posisiB.length; j++) {
            if (Math.abs(posisiA[i] - posisiB[j]) === 4) {
                return true; // Jika jarak antara 'a' dan 'b' adalah 3 (perbedaan posisi 4)
            }
        }
    }
    return false; // Jika tidak ada jarak yang memenuhi kriteria
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false