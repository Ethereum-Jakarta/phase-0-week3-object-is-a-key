function cariMedian(arr) {
    // you can only write your code here!
    arr.sort()
    let median;
    let tampung;
    if (arr.length % 2 != 0) {
        tampung = arr.length / 2;
        median = arr[Math.floor(tampung)]
    } else {
        tampung = arr[arr.length / 2 - 1] + arr[arr.length / 2];
        median = tampung / 2
    }
    return median
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5