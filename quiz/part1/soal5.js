function ubahHuruf(kata) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz';
    let hasil = '';

    for (let i = 0; i < kata.length; i++) {
        let index = abjad.indexOf(kata[i]);
        let hurufBaru = abjad[(index + 1) % 25]; 
        hasil += hurufBaru;
    }

    return hasil;

}
// // TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu