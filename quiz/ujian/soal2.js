
/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let output = [];
  for (let w = 0; w < arrPenumpang.length; w++) {
    let hasil = {
        penumpang : arrPenumpang[w][0],
        naikDari : arrPenumpang[w][1],
        tujuan : arrPenumpang[w][2],
        bayar : 0
    }
    let lokasi = 0
    for (let i = 0; i < rute.length; i++) {
      if (rute[i] === arrPenumpang[w][1]){
          lokasi = i;
      } else if (rute[i] === arrPenumpang[w][2]){
          lokasi = (i - lokasi ) * 2000;
          hasil.bayar = lokasi;
      }
    
    }
    output.push(hasil);
  }    
  return output;
  //your code here
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]