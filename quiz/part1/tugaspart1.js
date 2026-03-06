//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    if (angka < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            return false; 
        }
    }
    
    return true; 
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!

    let iniFpb = ""

    for (let i = 0; i < Math.min(angka1,angka2); i++) {
        
        if (angka1 % i == 0 && angka2 % i == 0) {
            iniFpb = i
        }
    }

    return iniFpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1

function cariMedian(arr) {
    // you can only write your code here!

    let Cek = Math.floor(arr.length / 2)

    if (arr.length % 2 !== 0) {
        return Cek;
    } else {
        return (arr[Cek - 1] + arr[Cek]) / 2;
    }

  }

  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
Function akan me-return modus dari array atau deret angka tersebut. 
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. 
Jika modus tidak ditemukan, function akan me-return -1. 
Apabila ditemukan lebih dari dua nilai modus, 
tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, 
Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    // you can only write your code here!
    let frequency = {};
    let maxFrequency = 0;
    let modus = -1;
  
    /**
     * * Hitung frekuensi setiap angka
     */
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
  
      if (frequency[num]) {
        frequency[num]++;
      } else {
        frequency[num] = 1;
      }
    }
  
    /**
     * * Cari modus (angka dengan frekuensi tertinggi yang pertama kali muncul)
     */
    for (let num in frequency) {
      if (frequency[num] > maxFrequency) {
        maxFrequency = frequency[num];
        modus = parseInt(num);
      }
    }
  
    /**
     * * Cek kondisi jika tidak ada modus atau hanya ada satu nilai yang muncul
     */
    let unique = Object.keys(frequency).length;
    if (unique === 1 || maxFrequency === 1) {
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

//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!

    // buat aray alphabet yang nanti akan berguna 
    const alphabetArray = Array.from("abcdefghijklmnopqrstuvwxyz");
    

    // buat sebuah variable yag nanti akan menampung nilainya 
    let hasil = ""

    // buat perulangan yang menginteri setiap parameter 
    for (let i = 0; i < kata.length; i++) {
        let indexkata = kata[i]
        for (let a = 0; a < alphabetArray.length; a++) {
            if (indexkata == alphabetArray[a]) {
                hasil = hasil + alphabetArray[a + 1]
                break;
            }
        }
    }

    return hasil;
  }

  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
