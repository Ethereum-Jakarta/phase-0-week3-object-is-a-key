function digitPerkalianMinimum(angka) {
    let minDigits = Infinity;
  
    for (let i = 1; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        let faktor1 = i;
        let faktor2 = angka / i;
        let jumlahDigit = (faktor1.toString() + faktor2.toString()).length;
        
        if (jumlahDigit < minDigits) {
          minDigits = jumlahDigit;
        }
      }
    }
  
    return minDigits;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  
  function urutkanAbjad(str) {
    let arr = str.split('');
    let n = arr.length;
  
    // Bubble Sort
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr.join('');
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  
  function tukarBesarKecil(kalimat) {
    let hasil = '';
  
    for (let i = 0; i < kalimat.length; i++) {
      let char = kalimat[i];
  
      if (char >= 'A' && char <= 'Z') {
        hasil += char.toLowerCase();
      } else if (char >= 'a' && char <= 'z') {
        hasil += char.toUpperCase();
      } else {
        hasil += char;
      }
    }
  
    return hasil;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM gaNtEnG')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
  
  function checkAB(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' && str[i + 4] === 'b') return true;
      if (str[i] === 'b' && str[i + 4] === 'a') return true;
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  