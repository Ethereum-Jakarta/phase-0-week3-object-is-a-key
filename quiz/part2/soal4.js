function checkAB(num) {
    // you can only write your code here!
for(let i = 0; i < num.length; i++){
    if(num [i] === 'a'){
        for(let j = i + 4; j < num.length; j++){
            if( j < num.length && num[j]  === 'b'){
                return true;
            }else if( i - 4 >= 0 && num [i - 4 ] === 'b'){
                return true;
            }
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