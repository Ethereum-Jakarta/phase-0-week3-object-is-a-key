//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
   let strCode = [];
   //ubah jadi angka / ASCII
   for (let i = 0; i < kata.length; i++) {
      let code = kata[i].charCodeAt();
      code++;
      strCode.push(code);
   }
   // ubah balik jadi huruf;
   let kalimat = [];
   let huruf;
   for (let i = 0; i < strCode.length; i++) {
      if (strCode[i] == 123) {
         huruf = "a";
      } else {
         huruf = String.fromCharCode(strCode[i]);
      }
      
      kalimat.push(huruf);
   }
   return kalimat.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zebra'));
console.log(ubahHuruf('anzay'));