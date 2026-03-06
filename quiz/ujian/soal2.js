/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    if (arrPenumpang.length < 1) {
        return [];
    }

    let receipts = [];

    for (let i = 0; i < arrPenumpang.length; i++) {
        let harga = 0;
        let titikAwal = 0;
        let titikTujuan = 0;
        
        for (let i2 = 0; i2 < rute.length; i2++) {
            if (arrPenumpang[i][1] === rute[i2]) {
                titikAwal = i2 + 1;
            }
            if (arrPenumpang[i][2] === rute[i2]) {
                titikTujuan = i2 + 1;
            }
        }
        
        harga = 2000 * (titikTujuan - titikAwal);
        let receipt = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: harga
        }
        receipts.push(receipt);
    }
    return receipts
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]