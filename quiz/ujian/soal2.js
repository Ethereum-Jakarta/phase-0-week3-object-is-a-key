
/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hasil = [];


    for (let i = 0; i < arrPenumpang.length; i++) {
        let [penumpang, naikDari, tujuan] = arrPenumpang[i];

        let indexNaik = rute.indexOf(naikDari);
        let indexTujuan = rute.indexOf(tujuan);
        let jarak = Math.abs(indexNaik - indexTujuan);
        let bayar = jarak * 2000;

        hasil.push({penumpang, naikDari, tujuan, bayar
        
        });
    }
    
    return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]