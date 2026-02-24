// Soal 2
// js
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) 
{
  // you can only write your code here!
    let hasilFPB = Math.min(angka1, angka2);

    while (hasilFPB > 0)
    {
        if (angka1 % hasilFPB === 0 && angka2 % hasilFPB === 0)
        {
            break;
        }
        
        hasilFPB--;
    }

    return hasilFPB;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1