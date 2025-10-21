/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  const rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  const reciept = arrPenumpang.map((penumpang) => {
    const jarak = rute.indexOf(penumpang[2]) - rute.indexOf(penumpang[1]);
    const onkos = jarak * 2000;
    return {
      penumpang: penumpang[0],
      naikDari: penumpang[1],
      tujuan: penumpang[2],
      bayar: onkos,
    };
  });
  return reciept;
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
