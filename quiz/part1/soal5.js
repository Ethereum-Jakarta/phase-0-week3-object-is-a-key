//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let result = "";

  //looping untuk mengubah setiap karakter menjadi kode yang dapat dibaca sistem
  //lalu ditambah 1, sehingga karakter ke n jadi n+1 atau jadi karakter setelahnya
  //setelah itu, ubah kode tadi menjadi karakter yang dapat dibaca manusia => push ke result
  for (let a of kata) {
    let huruf = String.fromCharCode(a.charCodeAt() + 1);
    result += huruf;
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
