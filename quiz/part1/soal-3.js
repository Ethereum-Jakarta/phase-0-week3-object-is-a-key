function cariMedian(arr) {
    // you can only write your code here!
    const jumlahData = arr.length;
    let position = 0;

    // sort
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    if(jumlahData % 2 === 0) {
        let posisi = jumlahData / 2 
        position = (arr[posisi - 1] + arr[posisi]) / 2;
    }
    if(jumlahData % 2 !== 0) {
        position = (jumlahData + 1) / 2
    }
    
    return arr[position] ? arr[position - 1] : position
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5