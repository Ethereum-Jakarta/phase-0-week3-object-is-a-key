function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let result = [];
  let terkecil = 999;
  for (let i = 1; i <= angka; i++) {
    for (let j = 1; j <= angka; j++) {
      if (i * j === angka) {
        if (i <= j) {
          result.push(i.toString() + j.toString());
        }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i].length < terkecil) {
      terkecil = result[i].length;
    }
  }
  return terkecil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
