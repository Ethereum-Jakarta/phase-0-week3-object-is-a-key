function cariMedian(arr) {
 let arrSort = arr.sort(function(a, b){return b-a});
  index = Math.floor((arr.length-1)/2)

  if (arr.length % 2 === 0) {
    let index2 = index+1
   return (arrSort[index]+arrSort[index2])/2
  } else 
  return (arrSort[index])
}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5