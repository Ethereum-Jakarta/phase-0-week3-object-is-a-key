function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let perbandingan = 0;
    for(let i = 1; i <= Math.sqrt(angka); i++){
        if(angka % i === 0){
            let faktor1 = i;
            let faktor2 = angka / i;
            let hitung = faktor1.toString().length + faktor2.toString().length
            perbandingan = Math.max(perbandingan,hitung)
        }       
    }
    return perbandingan;
}
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2



// let angka = 24;
// for (let i = 1; i < Math.sqrt(angka); i++){
//     if ( angka % i === 0){
        
//     }
// }
