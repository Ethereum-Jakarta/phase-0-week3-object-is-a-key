// console.log("soal ke-1");
// function angkaPrima(angka) {
//     for (let i = 2; i < angka; i++) {
//         if (angka % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(angkaPrima(3)); // true
// console.log(angkaPrima(7)); // true
// console.log(angkaPrima(6)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(33)); // false

// console.log("soal ke-2");
// function fpb(angka1, angka2) {
//     while (angka2 !== 0) {
//         const temp = angka2;
//         angka2 = angka1 % angka2;
//         angka1 = temp;
//     }
//     return angka1;
// }

// console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1

// console.log("soal ke-3");
// function kpk(a, b) {
//     let pembilang = a * b;

//     while (b !== 0) {
//         temp = b;
//         b = a % b;
//         a = temp;
//     }

//     let penyebut = a;

//     console.log(pembilang)
//     console.log(penyebut)

//     return pembilang / penyebut;
// }

// console.log(kpk(6, 8));

// console.log("soal ke-4");
// function cariMedian(arr) {
//     const sort = arr.sort(function (a, b) { return a - b })
//     // console.log(sort)
//     let median;

//     if (arr.length % 2 === 0) {
//         tengahGenap = sort.length / 2;
//         median = (sort[tengahGenap - 1] + sort[tengahGenap]) / 2
//     } else {
//         tengahGanjil = Math.floor(sort.length / 2);
//         median = sort[tengahGanjil];
//     }
//     return median;
// }

// console.log(cariMedian([1, 2, 3, 4, 5])); // 3
// console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
// console.log(cariMedian([3, 4, 7, 6, 10])); // 6
// console.log(cariMedian([1, 3, 3])); // 3
// console.log(cariMedian([7, 7, 8, 8])); // 7.5

// console.log("soal ke-5");
// function cariModus(arr) {
//     const frequencyMap = {};

//     arr.forEach(element => {
//         frequencyMap[element] = (frequencyMap[element] || 0) + 1;
//         // console.log(frequencyMap);
//     });

//     let modus = []; //[2]
//     let maxFrequency = 0;
//     let uniqueNumbers = Object.keys(frequencyMap).length;

//     for (const key in frequencyMap) {
//         // console.log("key:", key)
//         const frequency = frequencyMap[key];
//         // console.log(frequency)
//         if (frequency > maxFrequency) {
//             maxFrequency = frequency;
//             modus = [parseInt(key)];
//             // console.log("modus", modus)
//         } //else if (frequency === maxFrequency) {
//         //modus.push(parseInt(key));
//         //}
//     }

//     return (uniqueNumbers === 1 || uniqueNumbers === arr.length) ? -1 : modus;
// }

// console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1

console.log("Soal ke-6");
function ubahHuruf(kata) {
    // you can only write your code here!
    let huruf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let change = "";

    for (let i = 0; i < kata.length; i++) {
        // console.log(huruf[i])
        for (let j = 0; j < huruf.length; j++) {
            // console.log(kata[j])
            if (kata[i] === huruf[j]) {
                // console.log("huruf dicek:", kata[i], "huruf dicek2:", huruf[j])
                if (kata[i] === "z") {
                    change += "a"
                } else {
                    change += huruf[j + 1]
                }
            }
        }
    }

    return change;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
console.log(ubahHuruf("ayahkuz"));