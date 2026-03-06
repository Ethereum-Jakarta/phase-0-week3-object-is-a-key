/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai true jika di dalam string tersebut- 
terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
    // you can only write your code here!
    let count = [];
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if(element === 'a' || element === 'b') {
            count.push(i)
        }
    }
    // console.log(count)
    let total = 0;
    for (let i = 0; i < count.length; i++) {
        const element1 = count[i];
        for (let j = 0; j < count.length; j++) {
            const element2 = count[j];
            if(element1 !== 0) {
                // console.log(element2, element1)
                total = (element2 - 1) - element1
                // if(total === 3) break
            }
        }
        if(total === 3) {
            return true
        }
        // return total === 3
    }
    if(total === -1) return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
console.log(checkAB('labubu labu labubu')); // false
console.log(checkAB('babaxxxb')); // true