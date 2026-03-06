function fpb(angka1, angka2) {
    var result = angka1 < angka2 ? angka1 : angka2

    while (result > 0) {
        if (angka1 % result === 0 && angka2 % result === 0) {
            break
        }
        result--
    }

    return result
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
