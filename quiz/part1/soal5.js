//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let char = kata;
  let result = "";

  
  for (let i = 0; i < kata.length; i++){
    let ascii = char.charCodeAt(i);
    let inc = ascii + 1;
    if (ascii === 122){
      inc = 97;
    }
    let newChar= String.fromCharCode(inc);
    result += newChar

  }
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu