//cari faktor persekutuan terbesar
let hasil = [];
let angkaTemp = 0;
function fpb(angka1, angka2) {
  // you can only write your code here!
    if(angka1 < angka2){
        angkaTemp = angka1
        angka1 = angka2
        angka2 = angkaTemp
    }
    if(angka1 % angka2 === 0){
        return angka2;
    }
    return fpb(angka2,angka1 % angka2);
}



// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1