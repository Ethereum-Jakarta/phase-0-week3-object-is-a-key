function ubahHuruf(kata) {
  // you can only write your code here!
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < alphabet.length; i++) {
    let letter = kata[i];
    let position = alphabet.indexOf(letter);
    if (position >= 0) {
      let newLetter = alphabet[position + 1];
      result += newLetter;
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
