/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi.
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let index1 = [];
    let index2 = [];
    let sum = [];
    let angkot = [];

    for (let h = 0; h < arrPenumpang.length; h++) {

        for (let i = 0; i < rute.length; i++) {
            if (arrPenumpang[h][1] === rute[i]) {
                index1 = i;
            }
        }
        for (let j = 0; j < rute.length; j++) {
            if (arrPenumpang[h][2] === rute[j]) {
                index2 = j;
            }
        }
        let res = 2000 * Math.abs(index2 - index1)
        angkot.push({
            penumpang: arrPenumpang[h][0],
            naikDari: arrPenumpang[h][1],
            tujuan: arrPenumpang[h][2],
            bayar: res
        })
    }
    return angkot
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

