//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    nilaiA=[];
    nilaiB=[];
    let array;

    //Membuat Array angka1
    for (let i = 2; i < angka1; i++) {
      if (angka1 % i == 0) {
        nilaiA.push(angka1 / i) ;
      }
    }
    if (nilaiA.length == 0) {
      nilaiA.push(1);
    }

    //Membuat Array angka2
    for (let j = 2; j < angka2; j++) {
      if (angka2 % j == 0) {
        nilaiB.push(angka2 / j) ;
      }
    }
    if (nilaiB.length == 0) {
      nilaiB.push(1);
    }

    //Membandingkan Array angka1 dan Array angka2
    if(nilaiA.length >= nilaiB.length){
      array = nilaiA.length;
    }
    else array = nilaiB.length;

    for (let k = 0; k < array; k++) {
      for (let l = 0; l < array; l++) {
        if(nilaiA[k] == nilaiB[l]){
          return nilaiA[k];
        }
      }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1