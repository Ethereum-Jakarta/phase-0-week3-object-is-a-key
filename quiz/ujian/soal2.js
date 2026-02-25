/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let tarifPerRute = 2000;
    let result = [];

    for (let penumpang of arrPenumpang) {
        let obj = {
            penumpang: penumpang[0],
            naikDari: penumpang[1],
            tujuan: penumpang[2],
            bayar: (rute.indexOf(penumpang[2]) - rute.indexOf(penumpang[1])) * tarifPerRute
            // biaya dihitung dari selisih antar indeks NaikDari dan tujuan, dan dikalikan dengan Tarif per Rute
        };

        result.push(obj);
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]