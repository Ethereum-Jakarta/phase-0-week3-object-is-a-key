//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let newWord = '';
    for (let i = 0; i < kata.length; i++) {
        if(kata[i] === 'z') {
            newWord += 'a'
        } else {
            for (let j = 0; j < alphabet.length; j++) {
                if(kata[i] === alphabet[j]) {
                    newWord += alphabet[j + 1]
                }
            }
        }
    }
    return newWord;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf('zara')); // absb