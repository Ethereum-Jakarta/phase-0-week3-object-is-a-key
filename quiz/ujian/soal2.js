/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    if (arrPenumpang.length === 0) {
        return []
    }

    let newArr = []
    for (let i = 0; i < arrPenumpang.length; i++) {
        let obj ={}
        for (let j = 0; j < arrPenumpang[i].length; j++) {
            if (j == 0) obj['penumpang'] = arrPenumpang[i][j];
            else if (j == 1) obj['naikDari'] = arrPenumpang[i][j];
            else if (j == 2){
                obj['tujuan'] = arrPenumpang[i][j];
                obj['bayar'] = (obj['tujuan'].charCodeAt(0) - obj['naikDari'].charCodeAt(0)) * 2000
            }
        }
        newArr.push(obj)
    }
    return newArr
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]