/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi.
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  let hasil = [];

  for(let i = 0; i < arrPenumpang.length; i++){
    let nama = arrPenumpang[i][0]
    let naik = arrPenumpang[i][1]
    let turun = arrPenumpang[i][2]

    let iNaik = rute.indexOf(naik)
    let iTurun = rute.indexOf(turun)

    let totalBayar = (iTurun - iNaik) * 2000

    let data = {
    penumpang: nama,
    naikDari: naik, 
    tujuan: turun,
    bayar: totalBayar
  }
  hasil.push(data)

  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]