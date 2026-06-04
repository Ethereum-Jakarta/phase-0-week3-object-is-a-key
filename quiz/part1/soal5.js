function ubahHuruf(kata) {
  let alfabet = 'abcdefghijklmnopqrstuvwxyz'
  let kataBaru = '';

  for (let i = 0; i < kata.length; i++) {
    let cariHuruf = alfabet.indexOf(kata[i])
    let ubahHuruf = alfabet[(cariHuruf + 1) % 26]
    kataBaru += ubahHuruf
  }
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu