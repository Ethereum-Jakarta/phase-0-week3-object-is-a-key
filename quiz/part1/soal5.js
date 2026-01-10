
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let hasil = "";
  let semua_huruf = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < kata.length; i++) {
    for (let q = 0; q < semua_huruf.length; q++) {
        if ( kata[i] === semua_huruf[semua_huruf.length - 1]) {
            hasil+=semua_huruf[semua_huruf.length - 1];
        } else if (kata[i] === semua_huruf[q]) {
            hasil+=semua_huruf[q + 1];
        }
    }
  }
  return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu