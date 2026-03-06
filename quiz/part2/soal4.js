function checkAB(num) {
  let cek = false;
  let kumpulanA = [];
  let kumpulanB = [];
  for(let i = 0; i < num.length; i++){
    if('a' === num[i]) kumpulanA.push(i);
    if('b' === num[i]) kumpulanB.push(i);

  }
  // console.log(kumpulanA)
  for(let a of kumpulanA){
    for(let b of kumpulanB){
      if(a - b === 4 || b - a === 4) cek = true;
    }
  }
return cek
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false