function fpb(angka1, angka2) {
    // you can only write your code here!
    let min = Math.min(angka1, angka2);
    let fpbNum = 1;
    for (let i = 2; i <= min; i++){
        if(angka1 % i == 0 && angka2 % i == 0){
            if(i > fpbNum){
                fpbNum = i;
            }
        }
    }
    return fpbNum
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1