function checkAB(num) {
    for (let i = 0; i < num.length; i++){
        if (num[i] === 'a' && num[i + 4] === 'b'){
            return true;
        }
        if (num[i] === 'b' && num[i + 4] === 'a'){
            return true;
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
    console.log(checkAB('lanang berak')); // true