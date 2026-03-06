function checkAB(str) {
  // Iterasi setiap karakter dalam string
  for (let i = 0; i < str.length; i++) {
    // Periksa jika karakter saat ini adalah 'a'
    if (str[i] === "a") {
      // Periksa apakah ada 'b' pada jarak 4 karakter (indeks + 4)
      if (str[i + 4] === "b") {
        return true;
      }
    }
    // Periksa jika karakter saat ini adalah 'b'
    if (str[i] === "b") {
      // Periksa apakah ada 'a' pada jarak 4 karakter (indeks + 4)
      if (str[i + 4] === "a") {
        return true;
      }
    }
  }

  // Jika tidak ditemukan pasangan 'a' dan 'b' dengan jarak 3 karakter
  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
