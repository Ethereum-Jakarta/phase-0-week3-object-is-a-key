//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  let ubahHuruf = '';
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === 'z') {
      ubahHuruf += 'a';
    } else {
      ubahHuruf += String.fromCharCode(kata.charCodeAt(i) + 1);
    }
  }
  return ubahHuruf

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu