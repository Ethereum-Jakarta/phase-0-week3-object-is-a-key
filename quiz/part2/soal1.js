function digitPerkalianMinimum(angka) {
    var minDigit = Infinity

    for (var i = 1; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            minDigit = String(i) + String(Math.floor(angka / i))
        }
    }

    return minDigit.length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
