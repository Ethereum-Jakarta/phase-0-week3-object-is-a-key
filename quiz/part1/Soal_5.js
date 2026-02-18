//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!

  let ubah = "";

  for (let i = 0; i < kata.length; i++) {
    for (let j = 97; j <= 122; j++) {
      if (kata[i] === String.fromCharCode(j)) {
        ubah += String.fromCharCode(j + 1);
      }
    }
  }

  return ubah;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu