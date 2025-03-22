function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hasil = [];

    if (arrPenumpang.length === 0){
        return [];
    }

    for (let i = 0; i < arrPenumpang.length; i++){
        let penumpang = arrPenumpang[i][0]
        let naikDari = arrPenumpang[i][1]
        let tujuan = arrPenumpang[i][2]


    let indexNaik = rute.indexOf(naikDari)
    let indexTurun = rute.indexOf(tujuan)

    let jumlahRute = indexTurun - indexNaik;
    let bayar = jumlahRute * 2000;

        let infoPenumpang = {
            penumpang: penumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        }
        hasil.push(infoPenumpang);
    }
return hasil
}
    //TEST CASE
    console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
    // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
    //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
    
    console.log(naikAngkot([])); //[]