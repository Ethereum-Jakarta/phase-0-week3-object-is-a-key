/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat
karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali,
kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
    // you can only write your code here!
    let hurufA = [];                                    //tempat menyimpan posisi huruf a dan b
    let hurufB = [];
    for (let i = 0; i < num.length; i++) {              //mencari posisi huruf a dan b kemudian ditampung
        if (num[i] == 'a') {
            hurufA.push(i);
        } else if (num[i] == 'b')
            hurufB.push(i);
    }
    if (hurufA.length === 0 || hurufB.length === 0) {      //jika a atau b tidak ada maka false
        return false;
    }
    // console.log(hurufA);
    // console.log(hurufB);
    for (let i = 0; i < hurufA.length; i++) {
        for (let j = 0; j < hurufB.length; j++) {
            if (Math.abs(hurufA[i] - hurufB[j]) === 4) {    //jika selisih huruf a dan 4 adalah 4 (selisih 3 huruf) maka true
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