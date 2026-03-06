//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    let fpb = [];                           //tampung nilai
    for (let i = 1; i < angka1; i++) {
        let bagi1 = angka1 % i;
        let bagi2 = angka2 % i;

        if (bagi1 == 0 & bagi2 == 0) {
            fpb.push(i);
        }
    }
    return Math.max(...fpb);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1