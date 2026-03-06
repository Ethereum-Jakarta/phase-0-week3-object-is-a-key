/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    const costumer = [];
  
    if (arrPenumpang.length == 0) {
      return []
    }

    for (let i = 0; i < arrPenumpang.length; i++) {
      costumer.push({});
      costumer[i]['penumpang'] = arrPenumpang[i][0];
      costumer[i]['naikDari'] = arrPenumpang[i][1];
      costumer[i]['tujuan'] = arrPenumpang[i][2];

      // looping untuk menentukan bayar
      for (let j = 0; j < rute.length; j++) {
        for (let k = 0; k < rute.length; k++) {
          if (arrPenumpang[i][1] == rute[j] && arrPenumpang[i][2] == rute[k] ) {
            costumer[i]['bayar'] = Math.abs(k-j) * 2000;
          }
        }
      }
    }
    return costumer;
   }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]  
  console.log(naikAngkot([])); //[]