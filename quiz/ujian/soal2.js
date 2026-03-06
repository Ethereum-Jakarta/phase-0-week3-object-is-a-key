/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let hasil = [];

    for(let i = 0; i < arrPenumpang.length; i++) {
        let awal = 0;
        let tujuan = 0;
        let total = 0;

        for(let j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                awal = j;
            } 
            if (arrPenumpang[i][2] === rute[j]) {
                tujuan = j;
            }
        }
        total = 2000 * (tujuan - awal);
        let data = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: total
        }
        hasil.push(data);
    }
    return hasil;

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]