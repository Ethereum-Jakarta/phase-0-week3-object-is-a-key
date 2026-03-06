function changeMe(arr) {
  // you can only write your code here!
  if (arr.length == 0) return "";

  const temp = {};
  for (let i in arr) {
    let name = arr[i][0] + " " + arr[i][1];
    let gender = arr[i][2];
    let age = arr[i][3] ? 2023 - arr[i][3] : "Invalid Birth Year";

    temp[name] = { firstName: name, lastName: name, gender: gender, age: age };
  }
  console.log(temp);
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]); // 1. Christ Evans:
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
