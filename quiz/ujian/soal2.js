/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

  let result = [];

  if(arrPenumpang.length === 0) return result;

  for(let i = 0; i < arrPenumpang.length; i++) {
    let penumpang = arrPenumpang[i][0];
    let obj = {
        penumpang: penumpang,
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        bayar: 0
    }
     let indexMulai = 0;
    let indexAkhir = 0;
    // console.log(obj.naikDari)
    for(let j = 0; j < rute.length; j++) {
       
        if(obj.naikDari === rute[j]) {
            indexMulai = j;
        }
        if(obj.tujuan === rute[j]) {
            indexAkhir = j;
        }
    }
    obj.bayar = Math.abs(indexAkhir - indexMulai) * 2000;
    result.push(obj)
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]