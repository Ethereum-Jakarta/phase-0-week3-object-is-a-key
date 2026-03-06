function ubahHuruf(kata) {
    let hasil = ""
    for (let i = 0; i<kata.length; i++) {
        let char = kata[i];
        if (char >= 'a' && char <= 'z') {
            let kode = char.charCodeAt(0);
            if (kode === 122) {
                char = 'a';
            } else {
                char = String.fromCharCode(kode + 1);
            }
        }
        hasil += char;
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu