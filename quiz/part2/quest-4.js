

function checkAB(num) {
    let charA = [], charB = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            charA.push(i)
        } else if (num[i] === 'b') {
            charB.push(i)
        }
    }
    
    for (let i = 0; i < charA.length; i++) {
        let amount = 0;
        for (let j = 0; j < charB.length; j++) {
            amount = Math.abs(charA[i] - charB[j])
            if (amount === 4) return true;
        }
    }

    if (charA.length === 0 || charB.length === 0) return false;
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false