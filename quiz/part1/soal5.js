function ubahHuruf(kata) {
  let hasil = ""; // Variabel untuk menyimpan hasil akhir

  for (let i = 0; i < kata.length; i++) {
    let charCode = kata.charCodeAt(i); // Dapatkan kode ASCII dari huruf saat ini

    // Periksa apakah huruf adalah 'z' atau 'Z'
    if (charCode === 122) {
      // 'z' (kode ASCII 122)
      hasil += String.fromCharCode(97); // Ubah menjadi 'a' (kode ASCII 97)
    } else if (charCode === 90) {
      // 'Z' (kode ASCII 90)
      hasil += String.fromCharCode(65); // Ubah menjadi 'A' (kode ASCII 65)
    } else if (
      (charCode >= 97 && charCode <= 121) ||
      (charCode >= 65 && charCode <= 89)
    ) {
      // Jika huruf adalah a-z atau A-Z (selain z/Z), tambahkan 1 ke kode ASCII
      hasil += String.fromCharCode(charCode + 1);
    } else {
      // Jika bukan huruf alfabet, tambahkan karakter aslinya (opsional)
      hasil += kata[i];
    }
  }

  return hasil; // Kembalikan hasil akhir
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
