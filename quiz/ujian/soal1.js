// Last Logic Challenge Minggu 3 | Ujian

// Soal 1
/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/
function deepSum(arr) {
  // Code disini
  // return arr.flat(Infinity).reduce((acc, curr) => acc + curr, 0);

  let sum = 0;
  if (arr.length < 1) return "No number";

  for (const child of arr) {
    if (typeof child === "object") {
      sum += deepSum(child);
    } else if (typeof child === "number") {
      sum += child;
    }
  }
  return sum;
}

//TEST CASE
console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3],
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90],
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10],
    ],
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]],
  ])
); // 156

console.log(deepSum([])); // No number

console.log(""); // end soal 1
