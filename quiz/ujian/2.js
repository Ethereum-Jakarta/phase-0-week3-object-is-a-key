function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  const result = [];
  let indexStart, indexStop;

  for (let i = 0; i < arrPenumpang.length; i++) {
    const obj = {};
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2];

    indexStart = rute.indexOf(arrPenumpang[i][1]);
    indexStop = rute.indexOf(arrPenumpang[i][2]);

    obj.bayar = (indexStop - indexStart) * 2000;
    result.push(obj);
  }

  return result;
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
