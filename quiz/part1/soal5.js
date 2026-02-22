//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  let huruf = "abcdefghijklmnopqrstuvwxyz"
  let hasil = '';
  for(let i= 0; i < kata.length;i++){
    for(let j=0;j<huruf.length;j++){
      if(kata[i] == 'z'){
        hasil += 'a';
      }else if(kata[i] == huruf[j]){
        hasil += huruf[j + 1];
      }
    }
  } return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu