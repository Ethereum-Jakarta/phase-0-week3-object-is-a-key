//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
    var hasil = '';
    for (var i = 0; i < kata.length; i++) {
        var charCode = kata.charCodeAt(i);
        if (charCode === 122) { // 'z' or 'Z'
            hasil += 'a';
        } else if (charCode === 90) { // 'Z'
            hasil += 'A';
        } else {
            hasil += String.fromCharCode(charCode + 1);
        }
    }
    return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu