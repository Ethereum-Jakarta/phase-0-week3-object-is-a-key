/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  const result = [];
  
  for (const key in arrPenumpang) {
    const darimana = rute.indexOf(arrPenumpang[key][1]);
    const kemana = rute.indexOf(arrPenumpang[key][2]);
    
    const objek = {
        penumpang: arrPenumpang[key][0],
        naikDari: arrPenumpang[key][1],
        tujuan: arrPenumpang[key][2],
        bayar: ((kemana - darimana) * 2000)
    };
    
    result.push(objek);
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]