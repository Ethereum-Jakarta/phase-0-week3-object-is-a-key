// Soal 1
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!
//   for (let i = 2; i < angka; i++)
//     if (angka % i == 0) {
//             return false;
//     } else {
//             return true;
//   }
    let count = 0;
    let i = 2;
    while (i < angka) {
        if (angka % i == 0) {
            count++
        }
        i++
    }
    
    if (count != 0 && angka != 2) {
        return false;
    } else {
        return true;
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false


// Soal 2
console.log(' ');
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    let result = 0;
    for (i = 1; i <= angka1 || i <= angka2; i++) {
        if (angka1 % i == 0 && angka2 % i == 0) {
            result = i;
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1


// Soal 3
console.log(' ');
function cariMedian(arr) {
    // you can only write your code here!
    arr.sort(function(a, b){return a-b});
    let middleIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
        return arr[middleIndex];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5


  // Soal 4
  console.log(' ');
  function cariModus(arr) {
    // you can only write your code here!
    count = 0;
    result = 0;
    let highest = 0;
    for (i = 0; i < arr.length; i++) {
        highest = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                highest++;
                // console.log(`highest: ${highest}`);
            }
            if (highest > count) {
                count = highest;
                // console.log(`count: ${count}`);
                result = arr[i];
            } 
            // console.log(count);
        }
    }
    if (count == arr.length) {
        return -1;
    } else if (count == 1) {
        result = -1;
    }
    return result;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1


  // soal 5
  console.log(' ');
  //sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
let convertKeyValue = {
     a: 'b',
     b: 'c',
     c: 'd',
     d: 'e',
     e: 'f',
     f: 'g',
     g: 'h',
     h: 'i',
     i: 'j',
     j: 'k',
     k: 'l',
     l: 'm',
     m: 'n',
     n: 'o',
     o: 'p',
     p: 'q',
     q: 'r',
     r: 's',
     s: 't',
     t: 'u',
     u: 'v',
     v: 'w',
     w: 'x',
     x: 'y',
     y: 'z',
     z: 'a'
}
function ubahHuruf(kata) {
    // you can only write your code here!
    
         let newKata = "";
         for (i = 0; i < kata.length; i++) {
            let current = kata.charAt(i);
            // ilmu baru vroh ternyata bisa kek gini, sangat mempermudah | (condition) ? x:y | e.g, (z<18) ? x:y
            newKata += convertKeyValue[current] ? convertKeyValue[current] : '';
         }
         return newKata;
  }
  
  // TEST CASES
  console.log(ubahHuruf('bbc'));
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu