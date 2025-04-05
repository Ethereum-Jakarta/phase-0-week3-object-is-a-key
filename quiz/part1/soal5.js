//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let alpabet = [];
  for (let i = 0; i < 26; i++) {
    alpabet.push(String.fromCharCode(97 + i));
  }

  let huruf = kata.split("");

  let hasil = huruf.map((n) => {
    let index = alpabet.indexOf(n);
    return alpabet[index + 1];
  });

  return hasil.join("");
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
