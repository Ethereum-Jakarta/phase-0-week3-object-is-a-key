// Soal 3
// js
//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) 
{
  // you can only write your code here!
    kalimat = kalimat.split('');
    for (let i = 0; i < kalimat.length; i++)
    {
        if (kalimat[i].charCodeAt(0) > 64 && kalimat[i].charCodeAt(0) < 91)
        {
            kalimat[i] = kalimat[i].toLowerCase();
        }
        else
        {
            if (kalimat[i].charCodeAt(0) > 96 && kalimat[i].charCodeAt(0) < 123)
            {
                kalimat[i] = kalimat[i].toUpperCase();
            }
        }
    }
    
    kalimat = kalimat.join('');
    return kalimat;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"