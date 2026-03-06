function digitPerkalianMinimum(angka) {
    let faktorKali = [];
    let arrKosong = [];

    for (let i = 1; i <= Math.sqrt(angka); i++) { // Untuk mencari faktor" dari angka
        if (angka % i === 0) {
            faktorKali.push(i, angka/i)
        }
    }

    for (let i = 0; i < faktorKali.length; i +=2) { //Untuk memisahkan faktor" menjadi array sendiri"
        arrKosong.push(faktorKali.slice(i, i + 2))
    }

    let hasil = arrKosong.map(pair => [Number(`${pair[0]}${pair[1]}`)]); //Untuk menggabungkan digit" angka dalam sub array
    let panjangSubArray = hasil.map(sub => sub[0].toString().length); //Untuk mencari berapa banyak digit
    let angkaFinal = panjangSubArray.map(Number); //Untuk merubah stirng menjadi angka (untuk jaga")

    let HasilAkhir = Math.min(...angkaFinal); //Untuk menampilkan angka terkecil dalam array tersebut
    return HasilAkhir;


    
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2