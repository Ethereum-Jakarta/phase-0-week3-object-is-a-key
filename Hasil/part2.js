function digitPerkalianMinimum(angka) {
  if (angka == 0) {
    return 0 //untuk handle kasus tidak valid
  }

  let mindigits = Infinity; //mulai inisiasi dengan angka terbesar

  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
        let a = i;
        let b = angka / i;

        let combined = a.toString() + b.toString();
        let digitcount = combined.length;   


        if (digitcount < mindigits) {
            mindigits = digitcount
        }
    }
  }
  return mindigits;
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

  for (let i = 0; i < n - 1; i++) { 
    for (let j = 0; j < n - i - 1; j++) { 
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp; 
      }
    }
  }
  return arr.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

function tukarBesarKecil(kalimat) {
  let result = ""; 

  for (let char of kalimat) { //untuk mengambil satu persatu karakter dan memasukkanya dalam variabel kalimat
    if (char >= 'a' && char <= 'z') { 
      result += char.toUpperCase(); //menggunakan if statement untuk mengecek apakah karakter diantara a sampai z menggunakan lowercase, jika ya ubah menjadi uppercase
    } else if (char >= 'A' && char <= 'Z') { 
      result += char.toLowerCase();  //sebaliknya, mengecek apakah karakter a sampai z menggunakan uppercase, jika ya ubah menjadi lowercase
    } else {
      result += char; //untuk mengecek hal lain seperti simbol, spasi dan angka tetap menjadi biasa
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

function checkAB(str) {
  const panjang = str.length

  for (let i = 0; i < panjang - 5; i++) {
    if(str[i] === `a` && str[i + 4] === `b`|| str[i] === `b` && str[i + 4] === `a`) {
      return true
    } 
    }
    return false
    }

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

