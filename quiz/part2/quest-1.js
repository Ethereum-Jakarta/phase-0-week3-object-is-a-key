
function digitPerkalianMinimum(angka) {
    let arr = [], digit = [];

    for (let i = 0; i <= angka; i++) {
        for (let j = 0; j <= angka; j++) {
            if (i * j === angka) {
                arr.push(`${i}${j}`);
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        digit.push(arr[i].length);
    }
    return Math.min(...digit)
}


console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
