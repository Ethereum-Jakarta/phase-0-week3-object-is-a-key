function checkAB(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" && str[i + 4] === "b") {
      return true;
    }
    if (str[i] === "b" && str[i + 4] === "a") {
      return true;
    }
  }
  return false;
}

console.log(checkAB("lane borrowed"));
console.log(checkAB("i am sick"));
console.log(checkAB("you are boring"));
console.log(checkAB("barbarian"));
console.log(checkAB("bacon and meat"));
