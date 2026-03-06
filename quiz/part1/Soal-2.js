//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    let fpb1 = [];
     for (let i = 1; i <= angka1; i++ ) {
        if (angka1 % i === 0) {
            fpb1.push(i);
        }
     }

     let fpb2 = [];
     for (let i = 1; i <= angka2; i++) {
        if (angka2 % i === 0) {
            fpb2.push(i);
        }
     }

     let faktor = [];
     for (let i = 0; i <= fpb1.length; i++) {
        if (fpb2.includes(fpb1[i])) {
            faktor.push(fpb1[i]);
        }
     }

     return faktor[faktor.length - 1];
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1