/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hasil = [];

    for (let i = 0; i < arrPenumpang.length; i++) {
        let penumpang = arrPenumpang[i][0];
        let naikDari = arrPenumpang[i][1];
        let tujuan = arrPenumpang[i][2];

        let buatNaik = rute.indexOf(naikDari);
        let buatTujuan = rute.indexOf(tujuan);

        let jarak = buatTujuan - buatNaik;
        let bayar = jarak * 2000;

        let dataPenumpang = {
            penumpang: penumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        };

        hasil.push(dataPenumpang);
    }

    return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]