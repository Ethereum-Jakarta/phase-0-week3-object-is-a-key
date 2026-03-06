//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetLower = 'abcdefghijklmnopqrstuvwxyz';

    let newSentence = '';
    for (let i = 0; i < kalimat.length; i++) {
        const element = kalimat[i];
        if(element.toLowerCase() === element) {
            newSentence += element.toUpperCase()
        } else if(element.toUpperCase() === element) {
            newSentence += element.toLowerCase()
        } else {
            newSentence += element
        }
    }
    return newSentence;
    // you can only write your code here!
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"