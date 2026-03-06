/*Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let listResult = [];
  for(let dataPenumpang of arrPenumpang){
    let namaPenumpang = dataPenumpang[0];
    let naikDari= dataPenumpang[1];
    let tujuan = dataPenumpang[2];
    let bayar = (rute.indexOf(tujuan) - rute.indexOf(naikDari)) * 2000;

    let result = {
        namaPenumpang,
        naikDari,
        tujuan,
        bayar
    };
    listResult.push(result);
  }
  return listResult;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]