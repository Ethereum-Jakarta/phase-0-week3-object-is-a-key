function digitPerkalianMinimum(angka) {
  let minDigits = Infinity;
  
  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      let j = angka / i;
      let digits = String(i).length + String(j).length;
      if (digits < minDigits) {
        minDigits = digits;
      }
    }
  }
  
  return minDigits === Infinity ? 2 : minDigits;
}

console.log(digitPerkalianMinimum(24));
console.log(digitPerkalianMinimum(90));
console.log(digitPerkalianMinimum(20));
console.log(digitPerkalianMinimum(179));
console.log(digitPerkalianMinimum(1));

function urutkanAbjad(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.join('');
}

console.log(urutkanAbjad('hello'));
console.log(urutkanAbjad('truncate'));
console.log(urutkanAbjad('developer'));
console.log(urutkanAbjad('software'));
console.log(urutkanAbjad('aegis'));

function tukarBesarKecil(kalimat) {
  let result = '';
  for (let char of kalimat) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(tukarBesarKecil('Hello World'));
console.log(tukarBesarKecil('I aM aLAY'));
console.log(tukarBesarKecil('My Name is Bond!!'));
console.log(tukarBesarKecil('IT sHOULD bE me'));
console.log(tukarBesarKecil('001-A-3-5TrdYW'));

function checkAB(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      for (let j = i + 1; j <= i + 4 && j < str.length; j++) {
        if (str[j] === 'b' && j - i === 4) return true;
      }
    }
    if (str[i] === 'b') {
      for (let j = i + 1; j <= i + 4 && j < str.length; j++) {
        if (str[j] === 'a' && j - i === 4) return true;
      }
    }
  }
  return false;
}

console.log(checkAB('lane borrowed'));
console.log(checkAB('i am sick'));
console.log(checkAB('you are boring'));
console.log(checkAB('barbarian'));
console.log(checkAB('bacon and meat'));
