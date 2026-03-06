/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
  // you can only write your code here!
  num = num.split("");
  let filterA = num
    .map((val, index) => (val.includes("a") ? index : -1))
    .filter((val) => val !== -1);
  let filterB = num
    .map((val, index) => (val.includes("b") ? index : -1))
    .filter((val) => val !== -1);

  return filterA.some((num1) =>
    filterB.some((num2) => Math.abs(num1 - num2) - 1 === 3)
  );
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
