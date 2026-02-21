/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', 
bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
    var result = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var penumpang = arrPenumpang[i][0];
        var naikDari = arrPenumpang[i][1];
        var tujuan = arrPenumpang[i][2];
        var bayar = 0;
        var start = rute.indexOf(naikDari);
        var end = rute.indexOf(tujuan);
        if (start < end) {
            bayar = (end - start) * 2000;
        } else {
            bayar = (rute.length - start + end) * 2000;
        }
        result.push({
            penumpang: penumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        });
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]