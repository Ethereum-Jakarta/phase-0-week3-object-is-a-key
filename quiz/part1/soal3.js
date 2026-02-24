// Soal 3
// js
function cariMedian(arr) 
{
  // you can only write your code here!
    arr.sort(function(angka1, angka2){return angka1 - angka2});
    let hasilMedian;

    if (arr.length > 0)
    {
        if ((arr.length % 2) === 0)
        {
            hasilMedian = (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
        }
        else
        {
            hasilMedian = arr[Math.floor(arr.length / 2)];
        }
    }

    return hasilMedian;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5