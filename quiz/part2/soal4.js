/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
  // you can only write your code here!
  let indexA = [];
  let indexB = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "a") indexA.push(i);
    if (num[i] === "b") indexB.push(i);
  }

  if (indexA.length === 0 || indexB.length === 0) return false;

  for (let a of indexA) {
    for (let b of indexB) {
      let AB = Math.abs(a - b);
      if (AB === 4) return true;
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
