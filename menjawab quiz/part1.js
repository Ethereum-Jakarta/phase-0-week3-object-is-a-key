//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // console.log(angka)
    if (angka < 2) {
        return false;
    } else if (angka === 2 || angka === 3 || angka === 5 || angka === 7) {
        return true;
    } else if (angka % 2 === 0) {
        return false;
    }

    
    for (let i = 2; i < 10; i++) {
        if (angka % i === 0) {
            return false;
        }
    }

    return true;
    
    
    // if (angka === 2 || angka === 3 || angka === 5 || angka === 7) {
    //     return true;
    // }

    // if(angka % 2 === 0 || angka % 3 === 0 || angka % 4 === 0 || angka % 5 === 0 || angka % 6 === 0 || angka % 7 === 0 || angka % 8 === 0 || angka % 9 === 0) {
    //     return false;
    // } else {
    //     return true;
    // }

}
  
// TEST CASES
// console.log(angkaPrima(1)); // false
// console.log(angkaPrima(7)); // true
// console.log(angkaPrima(6)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(33)); // false
// console.log(angkaPrima(11)); // true
// console.log(angkaPrima(13)); // true
// console.log(angkaPrima(17)); // true
// console.log(angkaPrima(19)); // true
// console.log(angkaPrima(29)); // true
// console.log(angkaPrima(31)); // true
// console.log(angkaPrima(61)); // true




//SOAL KE-2

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    let fpbSementara = [];
    let fpbHasil;
    
    for (let i = 1; i <= angka1; i++) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            fpbSementara.push(i);
        }
    }
    // console.log(fpbSementara);
    
    fpbHasil = Math.max(...fpbSementara);

    return fpbHasil;
    
    
    // const angkaPrima = [2, 3, 5, 7, 11];
    // let angkaPertama = angka1;
    // let angkaKedua = angka2;    
    // let fpbSatuSementara = [];
    // let fpbDuaSementara = [];


    // for (let i = 0; i < angkaPrima.length; i++) {   
    //     if (angkaPertama % angkaPrima[i] === 0) {
    //         angkaPertama = angkaPertama / angkaPrima[i];
    //         fpbSatuSementara.push([i]);
    //     } else if (angkaKedua % angkaPrima[i] === 0) {
    //         angkaKedua = angkaKedua / angkaPrima[i];
    //         fpbSatuSementara.push([i]);
    //     }
    // }

    // console.log(fpbSatuSementara, fpbDuaSementara)
}
  
// TEST CASES
// console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1





//SOAL KE-3

function cariMedian(arr) {
    let urutanAngka = arr;
    urutanAngka.sort((a,b) => a - b);
    console.log(urutanAngka);
   
    if (urutanAngka.length % 2 === 1) {
        let median = Math.ceil(urutanAngka.length / 2);
        // console.log(median);
        return urutanAngka[median - 1];
    } else if (urutanAngka.length % 2 === 0) {
        let medianPertama = urutanAngka.length / 2; 
        medianPertama--;
        let medianKedua = urutanAngka.length /2;

        // console.log(medianPertama, medianKedua)
        let hasil = (urutanAngka[medianPertama] + urutanAngka[medianKedua]) / 2;
        return hasil;
    }
}
// TEST CASES
// console.log(cariMedian([1, 2, 3, 4, 5])); // 3
// console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
// console.log(cariMedian([3, 4, 7, 6, 10])); // 6
// console.log(cariMedian([1, 3, 3])); // 3
// console.log(cariMedian([7, 7, 8, 8])); // 7.5




//SOAL KE-4

/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    arr.sort((a,b) => a - b);
    let palingBesar = 0;
    let angkaBesar = 0;

    for (let i = 0; i < arr.length; i++) {
        let jumlah = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                jumlah++;
            }
        }
        // console.log(`Angka ${arr[i]} berjumlah ${jumlah}`);

        if (jumlah > palingBesar) {
            palingBesar = jumlah;
            angkaBesar = arr[i];
        } else if (jumlah === arr.length ) {
            return -1;
        }

    }
    if (palingBesar === 1) {
        return -1;
    }


    return angkaBesar;
}
  
// TEST CASES
// console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1




//SOAL KE-5

//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let bankKata = "abcdefghijklmnopqrstuvwxyz";
    let bankKata2 = "bcdefghijklmnopqrstuvwxyza";
    let result = "";

    for (let i = 0; i < kata.length; i++) {
        let index = bankKata.indexOf(kata[i]);
        // console.log(index);
        result += bankKata2[index];
    }
    return result;
}
  
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu