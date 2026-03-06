function naikAngkot(arrPenumpang) {
    if (!arrPenumpang?.length) return []

    var rute = ['A', 'B', 'C', 'D', 'E', 'F']
    var cost = 2000
    var idxFrom = null
    var idxDest = null

    var result = []

    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) idxFrom = j
            if (arrPenumpang[i][2] === rute[j]) idxDest = j
        }

        result.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: Math.abs(idxFrom - idxDest) * cost
        })
    }

    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
