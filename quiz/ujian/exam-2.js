
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    let arr = [];
    
    for (let i = 0; i < arrPenumpang.length; i++) {
        let hargaPerRute = 2000
        let jarak = Math.abs(rute.indexOf(arrPenumpang[i][1]) - rute.indexOf(arrPenumpang[i][2]));
        
        let obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: jarak * hargaPerRute
        };
        arr.push(obj);
    }

    if (arrPenumpang.length === 0) return [];
    return arr
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));