function ubahHuruf(kata) {
  // you can only write your code here!
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < kata.length; i++) {
    let index = alphabet.indexOf(kata[i]) + 1;
    result += alphabet[index];
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
