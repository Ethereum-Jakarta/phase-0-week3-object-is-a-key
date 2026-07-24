function cariMedian(arr) {
  let terurut = arr.slice().sort((a, b) => a - b)
  let panjang = terurut.length
  let indeksTengah = Math.floor(panjang / 2)
  if (panjang % 2 !== 0) {
    return terurut[indeksTengah]
  }
  else {
    return (terurut[indeksTengah - 1]+ terurut[indeksTengah]) / 2
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5