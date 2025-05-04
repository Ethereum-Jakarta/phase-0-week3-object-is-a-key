function ubahHuruf(kata) {
  // you can only write your code here!
  let result = "";

  for (let i = 0; i < kata.length; i++) {
    const char = kata[i];

    if (char >= "a" && char <= "z") {
      result +=
        char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);
    } else if (char >= "A" && char <= "Z") {
      result +=
        char === "Z" ? "A" : String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      result += char;
    }
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
