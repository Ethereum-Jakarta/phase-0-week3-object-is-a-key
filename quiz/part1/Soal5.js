//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let encrypt = ''
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  for(var i = 0; i<kata.length;i++) {
    for(var u = 0; u<abc.length;u++) {
      if(kata[i] == abc[u]) {
        if(kata[i] == 'z') {
          encrypt+= kata[i] = 'a'
        }else{
        encrypt+=kata[i] = abc[u+1]}
      }
    }
  }
  return encrypt
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu