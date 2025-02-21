function checkAB(str) {
  // Loop melalui setiap karakter dalam string
  for (let i = 0; i < str.length; i++) {
    // Cek apakah karakter sekarang adalah 'a' atau 'b'
    if (str[i] === "a" || str[i] === "b") {
      // Pastikan indeks i+4 tidak melewati batas string
      if (i + 4 < str.length) {
        // Jika karakter sekarang 'a' dan karakter di posisi i+4 adalah 'b'
        // atau sebaliknya, maka ditemukan jarak 3 karakter di antara keduanya.
        if (
          (str[i] === "a" && str[i + 4] === "b") ||
          (str[i] === "b" && str[i + 4] === "a")
        ) {
          return true;
        }
      }
    }
  }
  return false;
}
