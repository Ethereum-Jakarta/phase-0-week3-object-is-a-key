/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat 
karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
Jika tidak ditemukan sama sekali, kembalikan nilai false. 
Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
    arr = num.split('')
    let indexA = [];
    let indexB = [];
    let sum = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a") {
            indexA.push(i);
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "b") {
            indexB.push(j);
        }
    }

    if (indexB.length === 0 || indexA.length === 0) {
        return false
    } else {
        indexB.forEach(numA => {
            indexA.forEach(numB => {
                sum.push(numA - numB);
            });
        });
        let res = sum.map(Math.abs)
        sum = res
    }
    // console.log(sum)
    for (let k = 0; k <= sum.length - 1; k++) {
        if (sum.includes(4)) {
            return true
        } else
            return false
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false