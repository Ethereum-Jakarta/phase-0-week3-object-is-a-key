function changeMe(arr) {
  // you can only write your code here!
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  for (let i = 0; i < arr.length; i++) {
    let data = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: !arr[i][3] ? "Invalid Birth Year" : currentYear - arr[i][3],
    };
    console.log(`${i}. ${arr[i][0]} ${arr[i][1]} :`, !data ? "" : data);
  }
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

changeMe([]); // ""
