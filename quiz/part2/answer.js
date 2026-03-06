// console.log("Soal ke-1:");

// function digitPerkalianMinimum(angka) {
//     let result = [];
//     let temp = 0;

//     for (let i = 1; i <= angka; i++) {
//         temp = angka / i
//         if (temp - Math.floor(temp) === 0) {
//             result.push(temp.toString() + i.toString())
//         }
//     }

//     let digitTerkecil = result[0].length;
//     for (let i = 0; i < result.length; i++) {
//         if (result[i].length < digitTerkecil) {
//             digitTerkecil = result[i].length
//         }
//     }

//     return digitTerkecil;

// }

// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2

console.log("Soal ke-2:");

// function urutkanAbjad(str) {
//     let splitWord = str.split("")
//     console.log(splitWord)
//     for (let i = 0; i < splitWord.length; i++) {
//         console.log("loop pertama:", splitWord[i])
//         for (let j = 0; j < splitWord.length - 1; j++) {
//             console.log("loop kedua:", splitWord[j])
//             if (splitWord[j] > splitWord[j + 1]) {
//                 let temp = splitWord[j];
//                 splitWord[j] = splitWord[j + 1];
//                 splitWord[j + 1] = temp;
//             }
//         }
//     }

//     return splitWord.join("");
// }

// console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'

// console.log("Soal ke-3");
// function tukarBesarKecil(kalimat) {
//     let result = "";
//     for (let i = 0; i < kalimat.length; i++) {
//         // console.log("looping pertama:", kalimat[i])
//         if (kalimat[i] === kalimat[i].toUpperCase()) {
//             result += kalimat[i].toLowerCase();
//         } else if (kalimat[i] === kalimat[i].toLowerCase()) {
//             result += kalimat[i].toUpperCase()
//         } else {
//             result += kalimat[i]
//         }
//     }

//     return result;
// }

// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

console.log("Soal ke-4:");

function checkAB(num) {
    let countA = 0;
    let countB = 0;
    let start = num[0];
    for (let i = 0; i < num.length; i++) {
        // console.log("looping ke-1:", num[i]);

        if (num[i] === "a" & num[i + 4] === "b") {
            return true;
        } else if (num[i] === "b" && num[i + 4] === "a") {
            return true;
        }
    }

    return false;
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false