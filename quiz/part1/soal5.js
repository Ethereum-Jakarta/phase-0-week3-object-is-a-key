// ## Soal 5
// ```js
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  let newWord = "";

  for (const letter of kata) {
    if (letter === "z") {
      return "a";
    } else {
      const realCode = letter.charCodeAt(0);
      const newCode = realCode + 1;
      const newLetter = String.fromCharCode(newCode);
      newWord += newLetter;
    }
  }
  return newWord;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
