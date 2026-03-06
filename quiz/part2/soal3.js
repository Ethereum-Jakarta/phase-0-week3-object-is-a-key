function tukarBesarKecil(kalimat) {
  let hasil = ""; // Variabel untuk menyimpan hasil akhir

  for (let i = 0; i < kalimat.length; i++) {
    let char = kalimat[i]; // Ambil karakter saat ini

    // Periksa apakah karakter adalah huruf besar
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      hasil += char.toLowerCase(); // Ubah menjadi huruf kecil
    }
    // Periksa apakah karakter adalah huruf kecil
    else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      hasil += char.toUpperCase(); // Ubah menjadi huruf besar
    } else {
      // Jika bukan huruf alfabet (misalnya angka atau simbol), tambahkan karakter aslinya
      hasil += char;
    }
  }

  return hasil; // Kembalikan hasil akhir
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
