/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    var rute = ['A','B','C','D','E','F'];
    var result = [];

    for(var i = 0; i <arrPenumpang.length;i++){
        var penumpang = arrPenumpang[i][0];
        var naikDari = arrPenumpang[i][i];
        var tujuan = arrPenumpang[i][2];

        var indexNaik = rute.indexOf(naikDari);
        var indexTurun = rute.indexOf(tujuan);

        var bayar = (indexTurun - indexNaik) * 2000;

        result.push({
            penumpang: penumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        });
    }
    return result;
}

// TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); // []
