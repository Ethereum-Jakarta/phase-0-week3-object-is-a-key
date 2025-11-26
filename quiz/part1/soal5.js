function ubahHuruf(kata) {
    let jumlah = [];
    for(let i = 0; i < kata.length; i++){
        jumlah.push(kata[i].charCodeAt(0))
    }

    for(let i = 0; i < jumlah.length; i++){
        if(jumlah[i] === 122){
            jumlah[i] = 97;
        }
        else { jumlah[i]++}
    }

  return String.fromCharCode(...jumlah)
// return jumlah
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu