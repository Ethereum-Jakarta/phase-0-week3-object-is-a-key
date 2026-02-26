/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result = []
    let price = 2000;
    if(arrPenumpang === undefined || arrPenumpang.length === 0) {
        return result;
    };

    for(let data of arrPenumpang) {
        let indexNaik = -1;
        let indexTujuan = -1;
        for(let i = 0; i < rute.length; i++) {
            if(rute[i] === data[1]) {
                indexNaik = i;
            }
            if(rute[i] === data[2]) {
                indexTujuan = i;
            }
        }
        let jarak = indexTujuan - indexNaik;

        result.push({
            penumpang: data[0],
            naikDari: data[1],
            tujuan: data[2],
            bayar: jarak * price
        });
    };
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]