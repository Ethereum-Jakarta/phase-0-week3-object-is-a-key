//## Soal 4
//```js
/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(str) {
    let arr = str.split('');
    let jarak = 4;

    for(let i = 0; i < arr.length;i++){
        // Cek batas array agar i + jarak tidak keluar batas
        if (i + jarak < arr.length){ 
            
            // Cek 1: a diikuti b (dengan jarak 3)
            if (arr[i] === "a" && arr[i + jarak] === "b"){
                return true;
            }
            
            // Cek 2: b diikuti a (dengan jarak 3)
            if (arr[i] === "b" && arr[i + jarak] === "a"){
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