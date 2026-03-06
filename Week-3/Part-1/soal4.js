/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
  // you can only write your code here!
  let modus = -1; 
  let frekuensiTerbanyak = 1;
  let frekuensiSaatIni = 1;
  for (let i = 0; i < arr.length; i++) {
    frekuensiSaatIni = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        frekuensiSaatIni++;
      }
    }

    if (frekuensiSaatIni > frekuensiTerbanyak) {
      frekuensiTerbanyak = frekuensiSaatIni;
      modus = arr[i];
    }
  }


  if (frekuensiTerbanyak === 1 || frekuensiTerbanyak === arr.length) {
    return -1;
  }

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1











  //! [5, 10, 10, 6, 5]

  //TODO let modus = 5;
  //TODO let frekuensiTerbanyak = 2;
  //TODO let frekuensiSaatIni = 1;


  //* Loop i 1:

// 0 < 5 (ya) //5
// frekuensiSaatIni = 1;
    
//     Loop j 1:

//         1 < 5 (ya) //10
//         apakah 5 === 10 (tidak) 
    
//     Loop j 2:

//         2 < 5 (ya)
//         apakah apakah 5 === 10 (tidak) 

//     Loop j 3:

//         3 < 5 (ya)
//         apakah 5 === 6 (tidak)

//     Loop j 4:

//         4 < 5 (ya)
//         apakah 5 === 5 (ya)
//         FrekuensiSaatIni++

// apakah 2 > 1 (ya)
// frekuensiTerbanyak = 2
// modus = 5




//* Loop 2:

// 1 < 5 (ya) //10
// frekuensiSaatIni = 1

//     Loop j 1:

//         2 < 5 (ya) //10
//         apakah 10 === 10? (ya)

//      Loop j 2:

//         3 < 5 (ya) //6
//         apakah 10 === 6? (tidak)

//      Loop j 3:
        
//         4 < 5 (ya) // 5
//         apakah 10 === 5 (tidak)

// Loop j 4:
        
//         5 < 5 (tidak)

// apakah 2 > 2 (tidak)


//* Loop 3:

// 2 < 5 (ya) //10
// frekuensiSaatIni = 1

//     Loop j 1:

//         3 < 5 (ya) //6
//         apakah 10 === 6? (tidak)

//      Loop j 2:

//         4 < 5 (ya) //5
//         apakah 10 === 5? (tidak)

//      Loop j 3:
        
//         5 < 5 (tidak) //keluar 



//* Loop 4:

// 3 < 5 (ya) //6
// frekuensiSaatIni = 1

//     Loop j 1:

//         4 < 5 (ya) //5
//         apakah 6 === 5? (tidak)

//      Loop j 2:

//         5 < 5 (tidak)  


//* Loop 5:

// 4 < 5 (ya) //5
// frekuensiSaatIni = 1

//     Loop j 1:

//         5 < 5 (tidak) 



// apakah frekuensiTerbanyak == 1 atau ftrkuensiTerbanyak === 5? (TIDAK!!)

// maka, kembaliannya adalah: modus = 5



        






