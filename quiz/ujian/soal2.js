/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result = [];

    for (let i = 0; i < arrPenumpang.length; i++){
        let namaPenumpang = arrPenumpang[i][0];
        let lokasiAwal = arrPenumpang[i][1];
        let tujuanPenumpang = arrPenumpang[i][2];

    let indexAwal = rute.indexOf(lokasiAwal);
    let indexTujuan = rute.indexOf(tujuanPenumpang);

    let jarak = Math.abs(indexTujuan - indexAwal);
    let ongkos = jarak * 2000;

    result.push({
        penumpang: namaPenumpang,
        naikDari: lokasiAwal,
        tujuan: tujuanPenumpang,
        bayar: ongkos
      });
    };
    return result;
  };
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]