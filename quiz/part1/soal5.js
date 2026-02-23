//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let newKata = []
    for (let h of kata){
        let idx = kata.indexOf(h)
        newKata.push(String.fromCharCode(kata.charCodeAt(idx)+1))
    }
    if (newKata.length === 0) return "kata kosong";
    return newKata.join('')
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu