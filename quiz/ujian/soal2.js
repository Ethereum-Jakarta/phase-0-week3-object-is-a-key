// ## Soal 2
// ```js
// /*
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
// */

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let result = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    let obj = {};
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2];
    let start = 0;
    let end = 0;
    for (let j = 0; j < rute.length; j++) {
      if (rute[j] === obj.naikDari) {
        start = j;
      }
      if (rute[j] === obj.tujuan) {
        end = j;
      }
    }
    obj.bayar = Math.abs(end - start) * 2000;
    result.push(obj);
  }
  return result;
}

// //TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
// //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
// ```