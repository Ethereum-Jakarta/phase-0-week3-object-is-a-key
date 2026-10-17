/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    nilai = {'A': 0, 'B': 1, 'C':2, 'D':3, 'E': 4, 'F': 5};
    returnArrOfObj = [];
    let jarak
    arrPenumpang.forEach(penumpang => {
        jarak = Math.abs(nilai[penumpang[1]] - nilai[penumpang[2]]);
        returnArrOfObj.push({'penumpang': penumpang[0], 'naikDari': penumpang[1], 'tujuan': penumpang[2], 'bayar': 2000 * jarak});
    })
    return returnArrOfObj;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]