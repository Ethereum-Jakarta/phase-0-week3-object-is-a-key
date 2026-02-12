//```js
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let alfabet = "abcdefghijklmnopqrstuvwxyz";
  let kataBaru = "";
  for (let i = 0; i < kata.length; i++) {
    const huruf = kata[i];

    const posisiSekarang = alfabet.indexOf(huruf);

    let posisiBaru;

    if (posisiSekarang === alfabet.length - 1) {
      posisiBaru = 0;
    } else {
      posisiBaru = posisiSekarang + 1;
    }

    const hurufBaru = alfabet[posisiBaru];

    kataBaru += hurufBaru;
  }

  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
//```
