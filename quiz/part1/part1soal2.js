//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let fpb = 1;
  if(angka1 > angka2){
    let temp = angka2;
    angka2 = angka1;
    angka1 = temp;
  }
  for(let i = 2; i <= angka1; i++){
    if((angka1 % i == 0) && (angka2 % i == 0)){
        fpb = i;
    }
  }
  return fpb;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
