function checkAB(num) {
  // you can only write your code here!
  let arr = num.split(" ").join("");
  let indexA = -1;
  let indexB = -1;
  let terbesar = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      indexA = i;
    } else if (arr[i] === "b") {
      indexB = i;
    }
    console.log(indexA, indexB);
    if (indexA > 0 && indexB > 0) {
      let jarak = Math.abs(indexA - indexB);
      if (jarak > terbesar) {
        terbesar = jarak;
      }
    }
  }
  return terbesar > 2 ? true : false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
