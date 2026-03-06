//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const nextAlphabet = "bcdefghijklmnopqrstuvwxyza";
  const map = {};
  let changedWords = "";

  for (let i = 0; i < alphabet.length; i++) {
    map[alphabet[i]] = nextAlphabet[i];
  }

  for (let i = 0; i < kata.length; i++) {
    if (map[kata[i]]) {
      changedWords += map[kata[i]];
    }
  }

  return changedWords;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
