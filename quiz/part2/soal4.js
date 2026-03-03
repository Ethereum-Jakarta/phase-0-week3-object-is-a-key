// Soal 4

/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

/* ==== ALGORITMA ====
1. Gunakan for loop untuk memeriksa seluruh string dari indeks pertama 0
2. Gunakan if dan else if condition untuk memeriksa apakah huruf saat ini yang dalam indeks saat ini juga adalah huruf a atau b dan apakah 3 indeks di depanya itu merupakan huruf a atau b, jika ya, return true;
3. return false setelah loop selesai dan tidak ada huruf b atau a yang 3 indeks didepannya merupakan huruf a atau b;


*/


function checkAB(num) {
  // you can only write your code here!
  for(let i = 0; i < num.length; i++) {
    if(num[i] === 'a' && num[i + 4] === 'b') {
        return true
    } else if (num[i] === 'b' && num[i + 4] === 'a') {
        return true;
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
