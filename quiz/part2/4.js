function checkAB(num) {
  // you can only write your code here!
  let obj = {};

  for (let i = 0; i < num.length; i++) {
    if (obj[num[i]] !== undefined) {
      obj[num[i]].push(i);
    } else if (num[i] !== "a" && num[i] !== "b") { 
      continue;
    } else {
      obj[num[i]] = [i];
    }
  }
  // return obj
  let num1, num2;
  for (const key in obj) {
    if (key === "a") {
      num1 = obj[key]
    } else {
      num2 = obj[key]
    }
  }

  if (!num1 || !num2) {
    return false;
  }
  
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (Math.abs(num1[i] - num2[j]) === 4) {
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