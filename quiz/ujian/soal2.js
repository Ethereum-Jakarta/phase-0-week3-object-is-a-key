//soal 2

/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

/* ==== ALGORITMA ====
1. Buat array kososng bernama result
2. Buat for loop, lalu didalam for  lakukan :
- buat simpan nilai nama penumpang, tempat awal sampai ke tempat tujuan kedalam variable khusus
- buat object bernama dataPenumpang dan buat bebrapa key daninisialisasi keynya menggunakan nilai dari varaible yang sebelumnya telah dibuat
- gunakan method indexOf untuk menemukan titk awal dan titk akhir sipenumpang lalu simpan nilai nya kedalam varaible `narikDari` dan `tujuan`;
- lalu gunakan method Math.abs() untuk mengetahui jarak dari posisi `naikDari` ke `tujuan` lalau simpan nilainya kedalam variable jarak
- lalu kurangi hasil nilai variable jarak dengan 1 dan lalu hasilnya kali dengan 2000 lalu masukan nilainya keddlaam variable bayar
- lalu simpan variable bayar kedalam object  
- push variable objcet kedalam array result
3. kembalikan array result
*/

function naikAngkot(arrPenumpang) {
  //your code here

  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let result = [];

  for(let i = 0; i < arrPenumpang.length; i++) {
    // ambil data mentah dari array input
    let namaPenumpang = arrPenumpang[i][0];
    let naikDari = arrPenumpang[i][1];
    let tujuan = arrPenumpang[i][2];

    // Cari posisi indeksnya untuk perhitungan
    let posisAwal = rute.indexOf(naikDari);
    let posisAkhir  =  rute.indexOf(tujuan);

    // hitung ongkosnya
    let jarak = Math.abs(posisAwal - posisAkhir);
    let ongkos = jarak * 2000;

    // Sususn data kedalam object
    let dataPenumpang = {
      penumpang: namaPenumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: ongkos
    };

    // masukan data object kedalam array result
    result.push(dataPenumpang);
  }
  
  // kembalikan hasilnya
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
