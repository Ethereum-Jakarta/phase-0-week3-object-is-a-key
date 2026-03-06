//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    const faktorAngka1 = [];
    const faktorAngka2 = [];
    for (let i = 1; i <= angka1; i++) {
        // const element = array[i];
        if(angka1 % i === 0) faktorAngka1.push(i);
    }
    for (let i = 1; i <= angka2; i++) {
        // const element = array[i];
        if(angka2 % i === 0) faktorAngka2.push(i);
    }
    const faktorPersekutuan = [];
    // const length = faktorAngka1.length > faktorAngka2.length ? faktorAngka1.length : faktorAngka2.length;
    for (let i = 0; i < faktorAngka1.length; i++) {
            const element1 = faktorAngka1[i];
        for (let j = 0; j < faktorAngka2.length; j++) {
            const element2 = faktorAngka2[j];
            if(element1 === element2) {
                // console.log('faktor', i, element1, element2, j);
                faktorPersekutuan.push(element1)
            }
        }
    }
    return faktorPersekutuan[faktorPersekutuan.length - 1]
    
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1