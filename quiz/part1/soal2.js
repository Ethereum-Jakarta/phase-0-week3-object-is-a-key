//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    let arrRes = [];
    let small;
    if (angka1 >= angka2){
        small = angka2;
    } else small = angka1;

    for(i = 1; i <= small; i++){
        if (angka1 % i == 0 && angka2 % i == 0) arrRes.push(i);
    }
    return Math.max(...arrRes);
    
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1