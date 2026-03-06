//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
   //faktor angka1
   let faktor1 = [];
   for (let i = 0; i < angka1; i++) {
      if (angka1 % i == 0) {
         faktor1.push(i);
      }
   }
   //faktor angka2
   let faktor2 = [];
   for (let i = 0; i < angka2; i++) {
      if (angka2 % i == 0) {
         faktor2.push(i)
      }
   }
   
   let sama = faktor1.filter(num => faktor2.includes(num));
   return sama[sama.length - 1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1