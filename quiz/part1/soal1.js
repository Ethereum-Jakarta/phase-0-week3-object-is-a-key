function angkaPrima(angka) {
    if (angka < 2) return false;

    for (let i = 2; i <= Math.sqrt(angka); i++){
        if ( angka % i === 0){
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