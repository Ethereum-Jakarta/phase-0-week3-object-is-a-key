function checkAB(str) {
  let selisihIndex = 4;
  for (let i = 0; i < str.length - selisihIndex; i++) {
    if (
      (str[i] === "a" && str[i + selisihIndex] === "b") ||
      (str[i] === "b" && str[i + selisihIndex] === "a")
    ) {
      return true;
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