function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here

  let result = [];
  
  for (let i = 0; i < arrPenumpang.length; i++) {
    const [penumpang, naikDari, tujuan] = arrPenumpang[i];
    const start = rute.indexOf(naikDari);
    const end = rute.indexOf(tujuan);
    const bayar = (end - start) * 2000;

    result.push({ penumpang, naikDari, tujuan, bayar });
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
