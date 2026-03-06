/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
   let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
   let hasil = [];
   
   //looping array
   for (let i = 0; i < arrPenumpang.length; i++) {
      //bayar = tujuan - naik dari mana dikali 2000
      const bayar = (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * 2000;
      
      let obj = {};//buat objek penampung
      obj.penumpang = arrPenumpang[i][0];//nama penumpang
      obj.naikDari = arrPenumpang[i][1];//posisi awal
      obj.tujuan = arrPenumpang[i][2];//tujuan
      obj.bayar = bayar;//total pembayaran
      
      hasil.push(obj);//masukkan ke array obj tadi
   }
   
   return hasil;//return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]