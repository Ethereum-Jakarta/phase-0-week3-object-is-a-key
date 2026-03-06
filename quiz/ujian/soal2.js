/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  if(arrPenumpang == []) return []
  let data = [];
  for(let i = 0; i < arrPenumpang.length; i++){
    let namaPenumpang = arrPenumpang[i][0];
    let naikDari = arrPenumpang[i][1];
    let tujuan = arrPenumpang[i][2];
    let p, q;
    for(let j = 0; j < rute.length; j++){
        if(rute[j] == naikDari) p = naikDari.charCodeAt(0) - 64;
        if(rute[j] == tujuan) q = tujuan.charCodeAt(0) - 64;
    }
    let bayar = Math.abs(p - q) * 2000;
    let obj = {
        penumpang: namaPenumpang,
        naikDari: naikDari,
        tujuan: tujuan,
        bayar: bayar
    }

    data.push(obj);
  }
  return data;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]