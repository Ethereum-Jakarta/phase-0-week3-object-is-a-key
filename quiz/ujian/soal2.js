function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    let hasil = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        let penumpang = arrPenumpang[i][0];
        let naikDari = arrPenumpang [i][1];
        let tujuan = arrPenumpang [i][2];

        let indexNaik = rute.indexOf(naikDari);
        let indexTujuan = rute.indexOf(tujuan);
        let bayar = (indexTujuan - indexNaik) * 2000;
      
        hasil.push({ 
          penumpang : penumpang, 
          naikDari : naikDari, 
          tujuan : tujuan, 
          bayar : bayar
         });

         return hasil;
  
  }
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]