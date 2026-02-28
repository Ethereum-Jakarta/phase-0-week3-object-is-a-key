/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if(arrPenumpang.length === 0) return [];

  let result = [];

  for(let i = 0; i < arrPenumpang.length; i++) {
    const [ penumpang, naikDari, tujuan ] = arrPenumpang[i];

    let indexAwal = rute.indexOf(naikDari);
    let indexAkhir = rute.indexOf(tujuan);
    let jarak = indexAkhir - indexAwal;
    let bayar = jarak * 2000;

    result.push({
        penumpang,
        naikDari,
        tujuan,
        bayar
    })
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]