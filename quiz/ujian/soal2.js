/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  let temp = []

  if(arrPenumpang.length === 0) return []

  for(let i in arrPenumpang){
    let name = arrPenumpang[i][0]
    let firstRute = 0
    let lastRute = 0
    
    for (j in rute) {
      if(arrPenumpang[i][1] === rute[j]){
        firstRute = j
      } 
      if(arrPenumpang[i][2] === rute[j]){
        lastRute = j
      }
    }

    temp.push({
      penumpang: name,
      naikDari: rute[firstRute],
      tujuan: rute[lastRute],
      bayar: Math.abs(firstRute - lastRute) * 2000,
    });
  }
  return temp
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
