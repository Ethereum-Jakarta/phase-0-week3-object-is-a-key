// console.log("Soal ke-1:");
// function deepSum(arr) {
//     let result = 0;

//     if (arr.length === 0) {
//         return "No Number";
//     }

//     for (let i = 0; i < arr.length; i++) {
//         // console.log("looping ke-1:", arr[i]);
//         for (let j = 0; j < arr[i].length; j++) {
//             // console.log("looping ke-2:", arr[i][j]);
//             for (let k = 0; k < arr[i][j].length; k++) {
//                 // console.log("looping ke-3:", arr[i][j][k])
//                 result += arr[i][j][k]
//             }
//         }
//     }

//     return result;
// }

// console.log(deepSum([
//     [
//         [4, 5, 6],
//         [9, 1, 2, 10],
//         [9, 4, 3]
//     ],
//     [
//         [4, 14, 31],
//         [9, 10, 18, 12, 20],
//         [1, 4, 90]
//     ],
//     [
//         [2, 5, 10],
//         [3, 4, 5],
//         [2, 4, 5, 10]
//     ]
// ])); // 316

// console.log(deepSum([
//     [
//         [20, 10],
//         [15],
//         [1, 1]
//     ],
//     [
//         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//         [2],
//         [9, 11]
//     ],
//     [
//         [3, 5, 1],
//         [1, 5, 3],
//         [1]
//     ],
//     [
//         [2]
//     ]
// ])); // 156

// console.log(deepSum([])); // No number

// console.log("Soal ke-2:");
// function naikAngkot(arrPenumpang) {
//     rute = ["A", "B", "C", "D", "E", "F"];

//     if (arrPenumpang.length === 0) {
//         return []
//     }

//     let result = [];
//     for (let i = 0; i < arrPenumpang.length; i++) {
//         // console.log("Looping ke-1:", arrPenumpang[i]);
//         let penumpang = arrPenumpang[i];
//         let nama = penumpang[0];
//         let awal = penumpang[1];
//         let akhir = penumpang[2]

//         let indexAwal = -1;
//         let indexAkhir = -1;
//         for (let j = 0; j < rute.length; j++) {
//             // console.log("Looping ke-1:", rute[j]);
//             if (rute[j] === awal) {
//                 indexAwal = j;
//                 // console.log("awal:", indexAwal)
//             }

//             if (rute[j] === akhir) {
//                 indexAkhir = j
//             }
//         }

//         let jarak = indexAkhir - indexAwal;
//         // console.log("jarak:", jarak)
//         let bayar = jarak * 2000;

//         result.push({
//             penumpang: nama,
//             naikDari: awal,
//             tujuan: akhir,
//             bayar: bayar
//         })
//     }
//     return result;
// }

// console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
// //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]

// console.log("Soal ke-4:");
// function highestScore(students) {
//     let result = {};

//     for (let i = 0; i < students.length; i++) {
//         // console.log("looping ke-1:", students[i])
//         let nama = students[i].name;
//         // console.log("nama:", nama);
//         let nilai = students[i].score;
//         // console.log("nilai:", nilai);
//         let kelas = students[i].class;
//         // console.log("kelas:", kelas);

//         if (!result[kelas] || nilai > result[kelas].score) {
//             result[kelas] = {
//                 name: nama,
//                 score: nilai
//             }
//         }
//     }

//     return result;
// }

// console.log(highestScore([
//     {
//         name: 'Dimitri',
//         score: 90,
//         class: 'foxes'
//     },
//     {
//         name: 'Alexei',
//         score: 85,
//         class: 'wolves'
//     },
//     {
//         name: 'Sergei',
//         score: 74,
//         class: 'foxes'
//     },
//     {
//         name: 'Anastasia',
//         score: 78,
//         class: 'wolves'
//     }
// ]));

// // {
// //   foxes: { name: 'Dimitri', score: 90 },
// //   wolves: { name: 'Alexei', score: 85 }
// // }


// console.log(highestScore([
//     {
//         name: 'Alexander',
//         score: 100,
//         class: 'foxes'
//     },
//     {
//         name: 'Alisa',
//         score: 76,
//         class: 'wolves'
//     },
//     {
//         name: 'Vladimir',
//         score: 92,
//         class: 'foxes'
//     },
//     {
//         name: 'Albert',
//         score: 71,
//         class: 'wolves'
//     },
//     {
//         name: 'Viktor',
//         score: 80,
//         class: 'tigers'
//     }
// ]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// console.log(highestScore([])); //{}

console.log("Soal ke-5:");
function graduates(students) {
    let result = {};

    for (let i = 0; i < students.length; i++) {
        // console.log("looping ke-1:", students[i])

        let nama = students[i].name;
        let score = students[i].score;
        let kelas = students[i].class;

        // console.log(`nama: ${nama}, score: ${score}, kelas: ${kelas}`)

        if (score > 75) {
            if (!result[kelas]) {
                result[kelas] = []
            }
            result[kelas].push({
                name: nama,
                score: score
            })
        }
    }

    return result;
}

console.log(graduates([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// console.log(graduates([
//     {
//         name: 'Alexander',
//         score: 100,
//         class: 'foxes'
//     },
//     {
//         name: 'Alisa',
//         score: 76,
//         class: 'wolves'
//     },
//     {
//         name: 'Vladimir',
//         score: 92,
//         class: 'foxes'
//     },
//     {
//         name: 'Albert',
//         score: 71,
//         class: 'wolves'
//     },
//     {
//         name: 'Viktor',
//         score: 80,
//         class: 'tigers'
//     }
// ]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


// console.log(graduates([])); //{}