/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hasil = [];

    for (let i = 0; i < arrPenumpang.length; i++) {
        let penumpang = arrPenumpang[i][0];
        let naikDari = arrPenumpang[i][1];
        let tujuan = arrPenumpang[i][2];

        let indexNaik = -1;
        let indexTujuan = -1;

        
        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === naikDari) {
                indexNaik = j;
                break;
            }
        }

        
        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === tujuan) {
                indexTujuan = j;
                break;
            }
        }

        
        if (indexNaik === -1 || indexTujuan === -1) {
            continue;
        }

        let bayar = (indexTujuan - indexNaik) * 2000;

        hasil.push({
            penumpang: penumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        });
    }

    return hasil;
}

// TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([['Dimitri', 'F', 'X'], ['Icha', 'B', 'Z']])); // []

console.log(naikAngkot([])); // []
