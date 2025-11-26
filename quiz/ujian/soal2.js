function naikAngkot(arrPenumpang) {
  let harga = 2000;
  let hasil = [];
  for(let i = 0; i < arrPenumpang.length; i++){
      let obj = {};
      obj.penumpang = arrPenumpang[i][0];
      obj.naikDari = arrPenumpang[i][1];
      obj.tujuan = arrPenumpang[i][2];
      obj.bayar = (arrPenumpang[i][2].charCodeAt(0)-arrPenumpang[i][1].charCodeAt(0))*harga;
      hasil.push(obj)
    }

  return hasil
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]