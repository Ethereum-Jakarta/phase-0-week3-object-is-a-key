/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let hasil = [];                                                 
  for(let i = 0; i <= angka; i++) {
    if (angka % i == 0) {
      if(angka === 1) {
        hasil.push(angka)
      }
      hasil.push(i);
    }
  }

  let arrayHasil = []; 
  for(let j = 0; j < hasil.length; j++) {
    if(hasil === 1) {
      arrayHasil.push(`${hasil[j]}`);
    }
     for (let k = j + 1; k <= hasil.length; k++) {
       if (hasil[j] * hasil[k] === angka) {
         arrayHasil.push(`${hasil[j]}${hasil[k]}`);
       }
     }
  }

  if(arrayHasil == '1') {
    return 2;
  }

  let hasilAkhir = arrayHasil[0].length;
  for(let m = 1; m < arrayHasil.length; m++) {
    if(arrayHasil[m].length < hasilAkhir) {
      hasilAkhir = arrayHasil[m].length;
    } 
  }
  return hasilAkhir;
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(856)); // 
console.log(digitPerkalianMinimum(639)); // 
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2






// TODO 
//  function digitPerkalianMinimum(angka) {
// Handle case 0 , negative dan 1
//   if (angka <= 0) return 0;
//   if (angka === 1) return 2; // 1 x 1 = 1 (2 digits)

//   let minDigits = Infinity;

  // check akart quadrat angka
//   const sqrtAngka = Math.sqrt(angka);

  // Find cari faktor dan kalkulasi digit
//   for (let i = 1; i <= sqrtAngka; i++) {
//     if (angka % i === 0) {
//       const factor1 = i;
//       const factor2 = angka / i;

      // kalkulasi total digit pake convert string
//       const digits = factor1.toString().length + factor2.toString().length;

      // update minimum untuk yang terkecil
//       minDigits = Math.min(minDigits, digits);
//     }
//   }

//   return minDigits;
// }    



// ! PENJELASAN:

//angka = 24

// minDigits = 2000


// sqrtAngka = 4.89


// 2 <= 4.89

// apakah 24 % 2 === 0?

// factor1 = 2
// factor2 = 24 / 2 = 12

// digits = "2" + "12"
//        = 1 + 2
//        = 3

// minDigits = (2000, 3 )
