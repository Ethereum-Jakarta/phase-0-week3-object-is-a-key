function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hasil = []

    for (let i = 0; i < arrPenumpang.length; i++) {
        let [penumpang, naikDari, tujuan] = arrPenumpang[i];

        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === naikDari) {
                indexStart = j;
                break;
            }
        }

        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === tujuan) {
                indexEnd = j;
                break;
            }
        }
        let bayar = 2000 * (indexEnd - indexStart)
        hasil.push({
            penumpang: penumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        })
}
    return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]