/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(str) {
  // you can only write your code here!
  let indexA = [];
  let indexB = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      indexA.push(i);
    }
    if (str[i].toLowerCase() === "b") {
      indexB.push(i);
    }
  }

  if (indexA.length === 0 || indexB.length === 0) return false;

  let arrJarak = [];
  for (let i = 0; i < indexA.length; i++) {
    for (let j = 0; j < indexB.length; j++) {
      arrJarak.push([indexA[i], indexB[j]]);
    }
  }

  const jarak = arrJarak.map((jarak) => Math.abs(jarak[1] - jarak[0]));
  for (let x = 0; x < jarak.length; x++) {
    if (jarak[x] === 4) {
      return true;
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true => a : 1, b : 5
console.log(checkAB("i am sick")); // false => a : 2
console.log(checkAB("you are boring")); // true => a : 4, b : 8
console.log(checkAB("barbarian")); // true => a: 1 - 4 - 7 , b : 0, 3
console.log(checkAB("bacon and meat")); // false a : 1 - 6 -11 , b : 0
