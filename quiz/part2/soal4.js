// Soal 4
/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/
function checkAB(num) {
  // you can only write your code here!
  let arr = num.split(" ").join("").split("");
  let idxA = -1;
  let idxB = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      idxA = i;
    } else if (arr[i] === "b") {
      idxB = i;
    }
    if (idxA >= 0 && idxB >= 0) {
      // console.log(idxB)
      if (Math.abs(idxA - idxB) === 3) return true;
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

console.log(""); // end soal 4
