// Soal 2

// ==== ALGORITMA ====
// 1. Make a variable called biggerFactor as a result
// 2. Use for loop for get a random number for find a bigger factor
// 3. Using if condition to make sure  a number that we use is a factor
// 4. put a fcator that we find into variable called 'biggerFactor'
// 5. return the result outside for loop

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let biggerFactor = 1;

  let batas = angka1 < angka2 ? angka1: angka2;

  for(let i = 1; i <= batas; i++) {
    if(angka1 % i === 0 && angka2 % i === 0) {
      biggerFactor = i;
    }
  }
  return biggerFactor;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
