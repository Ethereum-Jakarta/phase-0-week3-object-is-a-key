/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    if (arrPenumpang.length === 0) return [];

    let result = [];

    for (let i = 0; i < arrPenumpang.length; i++) {
        let penumpang = arrPenumpang[i];
        let nama = penumpang[0];
        let naikDari = penumpang[1];
        let tujuan = penumpang[2];

        let idxNaikDari = rute.indexOf(naikDari);
        let idxTujuan = rute.indexOf(tujuan)

        let cost = Math.abs((idxNaikDari - idxTujuan) * 2000);
        
        result.push({
            penumpang: nama,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: cost
        });
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]