function naikAngkot(arrPenumpang) {
    
let res =[]
// cek kalo in kosong
if (arrPenumpang.length===0) {
    return []
}

// tarif dan rute
   let tarif = 2000
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];

//   loop PENTINg

for (let i = 0; i < arrPenumpang.length; i++) {
       let obj = {
            penumpang:"",
            naikDari:"",
            tujuan:"",
            bayar:0
        }
        let tujuan =rute.slice(rute.indexOf(arrPenumpang[i][1]),rute.indexOf(arrPenumpang[i][2]))
        obj.penumpang=arrPenumpang[i][0]
        obj.naikDari=arrPenumpang[i][1]
        obj.tujuan=arrPenumpang[i][2]
        obj.bayar=tarif*tujuan.length
    res.push(obj)
}
return res
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/
