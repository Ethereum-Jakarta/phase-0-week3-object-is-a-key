// Soal 5
// js
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) 
{
  // you can only write your code here!
    let ubahKata = '';

    for (let i = 0; i < kata.length; i++)
    {
        ubahKata += String.fromCharCode(kata.charCodeAt(i) + 1);
    }

    return ubahKata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu