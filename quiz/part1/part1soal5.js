//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let temporary = ''
    for(let i = 0; i < kata.length; i++){
        if(kata[i] == 'z'){ //kalau dia z harus diakali biar balik ke a ga bisa convert ke unicode
            temporary = temporary + 'a';
        }
        else{
            temporary = temporary + String.fromCharCode(kata[i].charCodeAt(0) +1); //selain z santai aja deh tinggal unicodenya tambah 1
        }
    }
    return temporary;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu