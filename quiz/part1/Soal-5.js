//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let hasil = " ";

    for (let i = 0; i < kata.length; i++) {
        let huruf = kata[i];

        if (huruf === 'z') {
            hasil += 'a';
        } else {
            let hurufBaru = String.fromCharCode(huruf.charCodeAt(0) + 1);
            hasil += hurufBaru;
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
