//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  const listOfFactor = [];
  for (let i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      for (let j = 1; j < angka2; j++) {
        if (angka2 % j === 0) {
          if (j === i) {
            listOfFactor.push(j);
          }
        }
      }
    }
  }
  return Math.max(...listOfFactor);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

//EKSPERIMET SIR =>

// let a = 24;
// let b = 60;

// function findFactor(num) {
//   let listOfFactor = [];
//   for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       continue;
//     }
//   }
//   return listOfFactor;
// }

// console.log(findFactor(a));
// console.log(findFactor(b));
