//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    let fa1=[];
    let fa2=[];
    let res = 0
  for (let i = 0; i <= angka1; i++) {
    if (angka1%i===0) {
        fa1.push(i)
    };
  };


  for (let j = 0; j <= angka2 ; j++) {
        if (angka2%j===0) {
            fa2.push(j)
        };
    };
    


    for (let x = 0; x < fa2.length; x++) {
        for (let y = 0; y < fa2.length; y++) {
            if (fa1[x]===fa2[y]) {
                res = fa1[x]
            }
        };
        
    };
    return res
};


// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1