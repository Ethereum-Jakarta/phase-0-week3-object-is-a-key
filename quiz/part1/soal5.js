//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newKata = "";
    for (let i = 0; i < kata.length; i++) {
        for(let i2 = 0; i2 < alphabet.length; i2++) {
            if(kata[i] === alphabet[i2]) {
                newKata += alphabet[i2 + 1];
            }
        }
    }
    return newKata;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu