//## Soal 3
//```js
function cariMedian(arr) {
  // you can only write your code here!
  const sortedArr = arr.slice().sort((a, b) => a - b);
  let panjangArr = sortedArr.length;
  let median;
  if (panjangArr % 2 === 0) {
    const index1 = panjangArr / 2 - 1;
    const index2 = panjangArr / 2;

    median = (arr[index1] + arr[index2]) / 2;
  } else if (panjangArr % 2 === 1) {
    const indextengah = Math.floor(panjangArr / 2);

    median = arr[indextengah];
  }

  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
//```
