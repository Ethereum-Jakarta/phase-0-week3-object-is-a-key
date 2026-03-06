/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here

  let output = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    output.push({
      penumpang: arrPenumpang[i][0],
      naikDari: "",
      tujuan: "",
      bayar: 0,
    });
  }

  for (let index = 0; index < arrPenumpang.length; index++) {
    let startIndex = rute.indexOf(arrPenumpang[index][1]);
    let endIndex = rute.indexOf(arrPenumpang[index][2]);
    let bayar = (endIndex - startIndex) * 2000;

    output[index].naikDari = rute[startIndex];
    output[index].tujuan = rute[endIndex];
    output[index].bayar = `Rp${bayar}`;
  }
  return output;
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
