/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/

function deepSum (arr) {
  // Code disini
  if (arr.length < 1) return "No number";
  
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let g = 0; g < arr[i].length; g++) {
        // let samting = "";
        for (let j = 0; j < arr[i][g].length; j++) {
            const angkanya = arr[i][g][j];
            result += angkanya;
            // samting += (j === arr[i][g].length - 1) ? arr[i][g][j] : arr[i][g][j] + ", ";
        }
        // samting = `[ ${samting} ]`;
        // console.log({samting});
    }
  }

  return result;
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