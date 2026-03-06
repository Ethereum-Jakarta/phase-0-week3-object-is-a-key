/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  const route = ['A', 'B', 'C', 'D', 'E', 'F'];
  const arr = [];

  const map = {};
  for (let i = 0; i < route.length; i++) {
    map[route[i]] = i;
  }

  for (let i = 0; i < arrPenumpang.length; i++) {
    const passenger = arrPenumpang[i][0];
    const start = arrPenumpang[i][1];
    const end = arrPenumpang[i][2];
    const distance = Math.abs(map[start] - map[end]);
    const cost = 2000 * distance;

    arr.push({
      penumpang: passenger,
      naikDari: start,
      tujuan: end,
      bayar: cost
    });
  }

  return arr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]