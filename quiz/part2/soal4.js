/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
   let inA = [];
   let inB = [];
   
   for (let i = 0; i < num.length; i++) {
      if (num[i] == "a") {
         inA.push(i);
      } else if (num[i] == "b") {
         inB.push(i);
      }
   }
   
   if (inA.length == 0 || inB.length == 0) {
      return false;
   }
   
   for (let i of inA) {
      for (let j of inB) {
         let jarak = Math.abs(i - j);
         let hasil;
         if (jarak === 4) {
            return true;
         }
      }
   }
   
   return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false