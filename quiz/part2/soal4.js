function checkAB(str) {
    for (var i = 0; i < str.length - 4; i++) {
        var validAB = str[i] === 'a' && str[i + 4] === 'b'
        var validBA = str[i] === 'b' && str[i + 4] === 'a'

        if (validAB || validBA) {
            return true
        }
    }

    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
