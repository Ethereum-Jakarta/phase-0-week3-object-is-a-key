/*
Soal 2
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  const hasil = [];
  if (arrPenumpang.length === 0) {
    return [];
  }

  for (let i = 0; i < arrPenumpang.length; i++) {
    const penumpang = arrPenumpang[i][0];
    const naikDari = arrPenumpang[i][1];
    const tujuan = arrPenumpang[i][2];

    const indexNaik = rute.indexOf(naikDari);
    const indexTurun = rute.indexOf(tujuan);
    const bayar = (indexTurun - indexNaik) * 2000;

    hasil.push({
      penumpang: penumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar,
    });
  }
  return hasil;
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
