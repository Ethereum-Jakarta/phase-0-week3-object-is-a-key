

function ubahHuruf(kata) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < kata.length; i++) {
       let char = alphabets.indexOf(kata[i])
       result += alphabets[char + 1] 
    }

    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu