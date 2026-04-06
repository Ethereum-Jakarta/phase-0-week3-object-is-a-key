// ## Soal 2
// ```js
/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  let rute = ["A", "B", "C", "D", "E", "F"];

  let nama = "";
  let berangkat = "";
  let tiba = "";
  let bayar = 0;

  let hasil = [];

  if (arrPenumpang.length === 0) {
    return [];
  }

  for (let i = 0; i < arrPenumpang.length; i++) {
    nama = arrPenumpang[i][0];
    berangkat = arrPenumpang[i][1];
    tiba = arrPenumpang[i][2];
    bayar = (rute.indexOf(tiba) - rute.indexOf(berangkat)) * 2000;

    hasil.push({
      penumpang: nama,
      naikDari: berangkat,
      tujuan: tiba,
      bayar: bayar,
    })
  }

  return hasil;

}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ]),
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
