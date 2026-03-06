function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  var result = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var penumpang = arrPenumpang[i];
    var obj = {
      penumpang: penumpang[0],
      naikDari: penumpang[1],
      tujuan: penumpang[2],
      bayar: (rute.indexOf(penumpang[2]) - rute.indexOf(penumpang[1])) * 2000,
    };
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
