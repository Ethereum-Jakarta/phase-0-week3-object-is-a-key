//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    const alfabet = 'abcdefghijklmnopqrstuvwxyz';
    const notAlfabet = '1234567890!@#$%^&*()- ';
    let result = '';

    for (let i = 0; i < kalimat.length; i++) {
      for (let j = 0; j < alfabet.length; j++) {

        if (kalimat[i] === alfabet[j].toUpperCase()) {
         result += kalimat[i].toLowerCase();
        }
        if (kalimat[i] === alfabet[j]) {
         result += kalimat[i].toUpperCase();
        }
        if (kalimat[i] === notAlfabet[j]) {
          result += kalimat[i];
        }
        
      }
    }

    return result;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"