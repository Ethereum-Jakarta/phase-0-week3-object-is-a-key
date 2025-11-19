function cariMedian(arr) {
    let sortNum = arr.sort((a, b) => a - b, 0);
    const middleIdx = Math.floor(sortNum.length / 2);
    
    if (arr.length % 2 === 0) {
        return (arr[middleIdx - 1] + arr[middleIdx]) / 2;
    } else {
        return arr[middleIdx];
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5