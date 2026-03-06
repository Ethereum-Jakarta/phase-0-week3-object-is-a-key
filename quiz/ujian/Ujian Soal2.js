function naikAngkot(arrPenumpang) {
  let rute = ["A", "B", "C", "D", "E", "F"];
  let hasil = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    let penumpang = arrPenumpang[i][0];
    let naikDari = arrPenumpang[i][1];
    let tujuan = arrPenumpang[i][2];

    let startIndex = rute.indexOf(naikDari);
    let endIndex = rute.indexOf(tujuan);

    let bayar = (endIndex - startIndex) * 2000;

    let obj = {
      penumpang: penumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar,
    };

    hasil.push(obj);
  }

  return hasil;
}

console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);

console.log(naikAngkot([]));
