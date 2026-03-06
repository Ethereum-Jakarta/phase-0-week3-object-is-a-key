function cariMedian(arr) {
    let res = 0;
    let parr= arr.length;
    const sortarr = arr.sort((a,b)=>a-b);
    if (arr.length%2===0) {
        let n1 = sortarr[parr/2-1];
        let n2 = sortarr[parr/2];
        res = (n1/2)+(n2/2);
    }else{
        let n = parr;
       res = Math.floor(n/2+1)
    };
    return res
};

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5