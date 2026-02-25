function cariMedian(arr) {
    // you can only write your code here!
    // Urutkan array terlebih dahulu
    arr.sort((a, b) => a - b);
    
    const len = arr.length;
    
    // Jika panjang array ganjil, kembalikan nilai tengah
    if (len % 2 !== 0) {
        return arr[Math.floor(len / 2)];
    }
    
    // Jika panjang array genap, kembalikan rata-rata dari dua angka tengah
    else {
        const mid1 = arr[len / 2 - 1];
        const mid2 = arr[len / 2];
        return (mid1 + mid2) / 2;
    }
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5