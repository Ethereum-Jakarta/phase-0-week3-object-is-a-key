
function fpb(angka1, angka2) {
    let fpb = [];;
    let result;

    for (let a = 0; a < angka1; a++) {
       if (angka1 % a === 0 && angka2 % a === 0) {
          fpb.push(a)
       }
    }
    result = Math.max(...fpb)
    return result
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1