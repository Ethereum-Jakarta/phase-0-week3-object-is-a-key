/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let titikAkhir, titikAwal;
    let arr = [];
    let obj = {};

    for (let i = 0; i < arrPenumpang.length; i++){
      for (let j = 0; j < arrPenumpang[i].length; j++){
        obj.penumpang = arrPenumpang[i][0];
        obj.naikDari = arrPenumpang[i][1];
        obj.tujuan = arrPenumpang[i][2];

        for (let k = 0; k < rute.length; k++){
          if (obj.naikDari === rute[k]) {
            titikAwal = k;
          }
          if (obj.tujuan === rute[k]) {
            titikAkhir = k;
          }
        }
    
      }
      
      titikAkhir -= titikAwal;
      obj.ongkos = titikAkhir * 2000;
      arr.push(obj);
      obj = {};
    }
    return arr;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]