function fpb(angka1, angka2) {
    
    let arry1 = []
    let arry2 = []
    let hasil = []
    for(let i = 1; i <= angka1; i++){
        if(angka1 % i === 0) arry1.push(i);
    }

    for(let j = 1; j <= angka2; j++){
        if(angka2 % j === 0) arry2.push(j)
    }

    for(let k = 0; k < arry1.length; k++){
        for(let l = 0; l < arry2.length; l++){
            if(arry1[k] === arry2[l]){
                hasil.push(arry1[k])
            }
        }
    }
    return Math.max(...hasil)
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1