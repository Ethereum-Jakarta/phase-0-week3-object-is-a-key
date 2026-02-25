/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/

function deepSum (arr) {
    if (arr.length === 0) {
        return "No Number";
    }

    let sum = 0;
    function SumNested (array) {
        for (let item of array) {
            if (Array.isArray(item)) { // Memeriksa apakah suatu variabel bernilai array.
                SumNested(item);
            } else {
                sum += item;
            }
        }
    }
    SumNested(arr); // memulai proses rekursi atau memanggil dirinya sendiri.
    return sum;
  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number