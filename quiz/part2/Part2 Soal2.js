function urutkanAbjad(str) {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr.join("");
}

console.log(urutkanAbjad("hello"));
console.log(urutkanAbjad("truncate"));
console.log(urutkanAbjad("developer"));
console.log(urutkanAbjad("software"));
console.log(urutkanAbjad("aegis"));
