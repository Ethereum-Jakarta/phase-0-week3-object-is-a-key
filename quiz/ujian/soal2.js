function naikAngkot(arrPenumpang) {
  let rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  let result = [];
  let indexTujuan = -1;
  let indexNaikDari = -1;
  let terkecil = 9999;

  if (arrPenumpang.length == 0) {
    return result;
  } else {
    for (let i = 0; i < arrPenumpang.length; i++) {
      for (let j = 0; j < rute.length; j++) {
        let arah = rute[j];
        if (arrPenumpang[i][2] == arah) {
          indexTujuan = j;
        } else if (arrPenumpang[i][1] == arah) {
          indexNaikDari = j;
        }
      }
      if (indexTujuan > -1 && indexNaikDari > -1) {
        let jarak = Math.abs(indexTujuan - indexNaikDari);
        if (jarak < terkecil) {
          terkecil = jarak;
        }
      }
      let bayar = terkecil * 2000;
      let data = {
        penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        harga: bayar,
      };

      result.push(data);
    }
    return result;
  }
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
