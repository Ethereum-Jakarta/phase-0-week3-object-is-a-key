
/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if (arrPenumpang.length === 0) {return [];}

  let hasil = []; 
  for(let i = 0; i < arrPenumpang.length; i++ ) {
    let naik = arrPenumpang[i][1];
    let turun = arrPenumpang[i][2];
    let bayar = (rute.indexOf(turun) - rute.indexOf(naik)) * 2000;
    hasil.push({
        "penumpang" : arrPenumpang[i][0],
        "naikDari" : arrPenumpang[i][1],
        "tujuan" : arrPenumpang[i][2],
        "bayar" : bayar
    });
  }
  return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]