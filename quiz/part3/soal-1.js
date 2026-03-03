function changeMe(arr) {
  arr.map((val) => {
    console.log(`${val[0]} ${val[1]}: `);
    console.log({
      firstName: val[0],
      lastName: val[1],
      gender: val[2],
      age: val[3] ? new Date().getFullYear() - val[3] : "Invalid Birth Year",
    });
  });
  // you can only write your code here!
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
