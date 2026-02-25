//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let hasil = '';
    for (let char of kata) {
        if (char === 'z') {
            hasil += 'a';
        } else if (char === 'Z') {
            hasil += 'A';
        } else if ((char >= 'a' && char <= 'y') || (char >= 'A' && char <= 'Y')) {
            hasil += String.fromCharCode(char.charCodeAt(0) + 1); //untuk memindahkan ke huruf selanjutnya, SC : Facebook.
        } else {
            hasil += char;
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