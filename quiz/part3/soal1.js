function changeMe(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const person = arr[i];
    const fullName = person[0] + " " + person[1];

    if (!obj[fullName]) {
      obj[fullName] = {
        firstName: person[0],
        lastName: person[1],
        gender: person[2],
        age: person[3] ? 2024 - person[3] : "Invalid Birth Year"
      }
    }
  }

  console.log(obj);
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
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