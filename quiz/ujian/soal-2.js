/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];

  if (arrPenumpang.length === 0) return [];

  let result = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    let penumpang = arrPenumpang[i][0];
    let startTujuan = arrPenumpang[i][1];
    let finishTujuan = arrPenumpang[i][2];

    let from = rute.indexOf(startTujuan);
    let end = rute.indexOf(finishTujuan);
    // console.log(`${from} ${end}`);
    let price = (end - from) * 2000;

    result.push({
      penumpang: penumpang,
      naikDari: startTujuan,
      tujuan: finishTujuan,
      bayar: price,
    });
  }
  return result;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
