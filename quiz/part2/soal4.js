/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
  // you can only write your code here!
  let AB = ["a", "b"];

  // cari di seluruh digit num apakah ada 'a' atau 'b'
  for (let i = 0; i < num.length; i++) {
    // kalo dia 'a' maka cek 4 digit kedepan dan kebelakang apakah ada 'b'
    // kalo ada maka return true
    if (num[i].toLowerCase() === AB[0]) {
        if ((num[i + 4] === AB[1])) return true;
        if ((num[i - 4] === AB[1])) return true;
    } 
    // kalo dia 'b' maka cek 4 digit kedepan dan kebelakang apakah ada 'a'
    // kalo ada maka return true
    else if ((num[i].toLowerCase() === AB[1])) {
        if ((num[i - 4] === AB[0])) return true;
        if ((num[i - 4] === AB[0])) return true;
    }
  }

  // kalo nggk ada AB yang berjarak 3 digit yaudah return false
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false