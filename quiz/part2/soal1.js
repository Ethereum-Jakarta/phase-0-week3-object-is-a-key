function digitPerkalianMinimum(angka) {
    let digit = Infinity;

    for (let i = 1; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            let faktor1 = i;
            let faktor2 = angka / i;
            let jumlahDigit = String(faktor1).length + String(faktor2).length;
            
            if (jumlahDigit < digit) {
                digit = jumlahDigit;
            }
        }
    }

    return digit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2