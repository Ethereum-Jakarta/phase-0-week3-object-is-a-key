/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi.
 Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', 
bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];

  hasil = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    let dari = rute.indexOf(arrPenumpang[i][1]);
    let ke = rute.indexOf(arrPenumpang[i][2]);
    let bayar = (ke - dari) * 2000;

    let obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: bayar,
    };

    hasil.push(obj);
  }

  return hasil;
  //your code here
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
