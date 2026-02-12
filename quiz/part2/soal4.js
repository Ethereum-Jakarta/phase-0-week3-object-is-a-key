/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(str) {
  // you can only write your code here!
  // langkah pertama adalah membuat str menjadi array
  let strArray = str.split("");
  // langkah kedua adalah membuat array baru untuk menyimpan posisi a dan b
  const posA = [];
  const posB = [];

  // langkah ketiga adalah mencari posisi a dan b di dalam array strArray dan memasukan ke dalam array posA dan posB
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === "a") {
      posA.push(i);
    } else if (strArray[i] === "b") {
      posB.push(i);
    }
  }

  // langkah keempat memeriksa apakah ada "a" dan "b"
  if (posA.length === 0 || posB.length === 0) {
    return false;
  }

  // langkah kelima adalah memeriksa kombinasi dari setiap posisi a dan b jika <== 4 maka return true
  for (const a of posA) {
    for (const b of posB) {
      if (Math.abs(a - b) <= 4) {
        return true;
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
