//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let changeCase = '';
    for(let i = 0; i<kalimat.length;i++){
        if(kalimat[i].toUpperCase() !== kalimat[i]){
            changeCase += kalimat[i].toUpperCase();
        }
        else if(kalimat[i].toLowerCase() !== kalimat[i]){
            changeCase += kalimat[i].toLowerCase();
        }
        else{
            changeCase += kalimat[i];
        }
    }
    return changeCase;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"