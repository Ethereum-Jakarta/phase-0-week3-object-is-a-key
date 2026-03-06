function checkAB(num) {
    let pisahKata = num.split('')
    for  (let i = 0; i < pisahKata.length; i++) {
        for (let j = 0; j < pisahKata.length; j++) {
            if (pisahKata[j] === 'a' && pisahKata[j+4] === 'b' || pisahKata[j] === 'b' && pisahKata[j+4] === 'a') {
                return true;
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false