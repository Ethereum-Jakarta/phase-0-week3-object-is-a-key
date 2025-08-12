/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  const rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  // pengondisian untuk memastikan bahwa data yang diberikan tidak data kosong
  if (arrPenumpang.length === 0) {
    return arrPenumpang;
  }

  // deklarasi variabel hasil
  const hasil = [];

  // mengiterasi semua properti arrPenumpang
  for (let i = 0; i < arrPenumpang.length; i++) {
    if (
      rute.includes(arrPenumpang[i][1]) &&
      rute.includes(arrPenumpang[i][2])
    ) {
      const penumpang = arrPenumpang[i][0];
      const naikDari = arrPenumpang[i][1];
      const tujuan = arrPenumpang[i][2];

      const hasilSementara = {
        penumpang: penumpang,
        naikDari: naikDari,
        tujuan: tujuan,
        bayar: (rute.indexOf(tujuan) - rute.indexOf(naikDari)) * 2000,
      };

      hasil.push(hasilSementara);
      // menghitung jumlah harga yang harus dibayarkan
      //   for (let j =0 ; j< rute.length ; j++) {
      //     if
    } else {
      hasil.push("rute anda tidak valid Bosku");
    }
  }
  return hasil;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
