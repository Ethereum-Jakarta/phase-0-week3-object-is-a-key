
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let hasil = '';
    for (let i = 0; i < kata.length; i++) {
        let buatHasil = kata.charCodeAt(i);
        let hurufBaru = String.fromCharCode(buatHasil + 1);
        if (kata[i] === 'z') hurufBaru = 'a';
            hasil +=  hurufBaru;

    }

    return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu