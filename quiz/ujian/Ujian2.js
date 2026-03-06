/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  hasil = []
  if(arrPenumpang.length == 0) { return hasil}
  for(var i=0;i<arrPenumpang.length;i++){
    let data ={}
    data.penumpang = arrPenumpang[i][0]
    data.naikDari = arrPenumpang[i][1]
    data.tujuan = arrPenumpang[i][2]
    let biaya =0
    let jarak = rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])
      biaya = jarak * 2000
    data.bayar = biaya
    hasil.push(data)
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]