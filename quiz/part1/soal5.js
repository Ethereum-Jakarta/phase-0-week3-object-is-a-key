function ubahHuruf(kata) {
  let res = "";
  for (let i = 0; i < kata.length; i++) {
    let ascii = kata.charCodeAt(i);
    res += String.fromCharCode(ascii + 1);
  }
  return res;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
