//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetLength = alphabet.length;
    let result = "";
    for(let char of kata){
        let idx = alphabet.indexOf(char);
        result += alphabet[idx+1 % alphabetLength];
    }
    return result;
  }

  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu