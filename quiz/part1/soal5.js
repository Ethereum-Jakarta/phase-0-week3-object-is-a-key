function ubahHuruf(kata) {
    let alfabet = 'abcdefghijklmnopqrstuvwxyz'
    let hurufBaru = ''

    for (let i = 0; i < kata.length; i++){
        let huruf = kata[i]
        let laci = alfabet.indexOf(huruf)
        let laciBaru = laci +1

        if (huruf === 'z'){
            hurufBaru = hurufBaru + 'a'
        }else{
            hurufBaru = hurufBaru + alfabet[laciBaru]
        }
    }
    return hurufBaru
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu