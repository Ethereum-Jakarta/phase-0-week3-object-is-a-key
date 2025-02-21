function ubahHuruf(kata) {
  let result = "";

  for (let i = 0; i < kata.length; i++) {
    let char = kata[i];
    if (char === "z") {
      result += "a";
    } else {
      // Dapatkan kode ASCII dan tambah 1
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    }
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
