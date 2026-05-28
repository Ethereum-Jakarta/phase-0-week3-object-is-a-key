/*
Latihan Mandiri
    1. Destructure object { x: 10, y: 20, z: 30 } dan ambil cuma x dan z
    2. Pakai spread buat merge { a: 1, b: 2 } dan { b: 3, c: 4 } — apa nilai b?
    3. Bikin fungsi ambilPertama(arr) yang return { first, rest } pakai destructuring
    4. Swap dua variabel tanpa variabel temporary

    // karena gw lagi pusing tugas sekolah, gw pake default dari latihan mandirinya aja
*/
// number1
let test = {x : 10, y : 20, z: 30};
let {x , z} =  test ;
console.log(x , z);

//number2
let test1 = {a : 1, b : 2};
let test2 = {b : 3, c : 4};
let test1AND2v1 = {...test2, ...test1}; // Kalo gini b = 2 karena ketimpa yang terakhir. But, kebalik. { b: 2, c: 4, a: 1 }
let test1AND2v2 = {...test1, ...test2}; // kalo ini baru b = 3 karena ketimpa yang terakhir. dikasus ini b : 3 adalah yang terakhir
console.log(test1AND2v1);
console.log(test1AND2v2);

//number3
let ngetest3 = [10, 11, 12, 13, 14, 15, 90, 122, 134, 345];
function ambilPertama(arr) {
    let [angka1, ...sisa] = arr;
    return {angka1, sisa};
} 
console.log(ambilPertama(ngetest3));

//number4
let ngetest4v1 = [12, 31, 534, 65, 64, 53 ,54];
let ngetest4v2 = [32, 43, 52, 54, 98];
ngetest4v1 += [...ngetest4v2];
console.log(ngetest4v1);