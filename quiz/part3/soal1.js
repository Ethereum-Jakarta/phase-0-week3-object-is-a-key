function changeMe(arr) {
  // you can only write your code here!
  if (arr.length == 0) console.log('""');
  for (const list of arr) {
    let age = !list[3] ? "invalid Birth Year" : list[3];
    let person = {
      firstName: list[0],
      lastName: list[1],
      gender: list[2],
      age: age,
    };
    console.log(`${list[0]} ${list[1]}: `);
    console.log(person);
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

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

changeMe([]); // ""
