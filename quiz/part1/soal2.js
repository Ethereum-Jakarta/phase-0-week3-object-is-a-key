//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    let smallest = 0;
    if (angka1 > angka2) {
        smallest = angka2
    } else {
        smallest = angka1
    }
    for (let i = smallest; smallest > 0; smallest--){
        if(angka1 % smallest === 0 && angka2 % smallest === 0){
            return smallest;
        }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1