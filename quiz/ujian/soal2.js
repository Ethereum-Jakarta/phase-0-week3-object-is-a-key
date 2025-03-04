function naikAngkot(arrPenumpang) {
  let rute = ["A", "B", "C", "D", "E", "F"];
  let result = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    let penumpang = arrPenumpang[i][0];
    let naikDari = arrPenumpang[i][1];
    let tujuan = arrPenumpang[i][2];

    let startIdx = rute.indexOf(naikDari);
    let endIdx = rute.indexOf(tujuan);
    let bayar = (endIdx - startIdx) * 2000;

    result.push({
      penumpang: penumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar,
    });
  }

  return result;
}

// TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);

console.log(naikAngkot([])); // []
