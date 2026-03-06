/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let hasil = []
    for (let i = 0; i < arrPenumpang.length; i++) {
        let penumpang = arrPenumpang[i][0];
        let ruteAwal = arrPenumpang[i][1];
        let tujuan = arrPenumpang[i][2];
        let hitung = 0;
        let hitung1 = 0;
        let harga = 0;

        for (let j = 0; j < rute.length; j++) {
            if (ruteAwal === rute[j]) {
                hitung = j;
            }
            if (tujuan === rute[j]) {
                hitung1 = j
            }
            harga = (hitung1 - hitung) * 2000
        }
        hasil.push({
            penumpang: penumpang,
            naikDari: ruteAwal,
            tujuan: tujuan,
            bayar: harga
        })
    }
    return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]