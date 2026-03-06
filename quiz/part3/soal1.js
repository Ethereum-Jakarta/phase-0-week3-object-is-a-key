function changeMe(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let obj = {
        name: arr[i][j] + " " + arr[i][j + 1],
        firstName: arr[i][j],
        lastName: arr[i][j + 1],
        gender: arr[i][j + 2],
        age: 2025 - arr[i][j + 3] || "Invalid Birth Year",
      };
      console.log(obj);
    }
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

changeMe([]); // ""
