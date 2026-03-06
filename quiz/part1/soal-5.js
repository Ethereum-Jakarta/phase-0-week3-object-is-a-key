//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya

function ubahHuruf(kata) {
  // bantuan GPT sir heheh stuck :)
  return kata
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);
      }
      return char;
    })
    .join("");
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
