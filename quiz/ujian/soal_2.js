/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  const result = [];
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  for (let i = 0; i < arrPenumpang.length; i++) {
    const [penumpang, naikDari, tujuan] = arrPenumpang[i];
    
    const naikIndex = rute.indexOf(naikDari);
    const tujuanIndex = rute.indexOf(tujuan);
    
    const bayar = Math.abs(tujuanIndex - naikIndex) * 2000;
    
    result.push({
      penumpang: penumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar
    });
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]