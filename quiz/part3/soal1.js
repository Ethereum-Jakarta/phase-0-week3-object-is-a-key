function changeMe(arr) {
  // you can only write your code here!
  if(arr.length === 0) return "";

  for(let i = 0; i < arr.length; i++) {
    const [firstName, lastName, gender, birthYear] = arr[i];

    const age = birthYear ? 2026 - birthYear : "Invalid Birth Year";

    const fullName = `${i + 1}. ${firstName} ${lastName}: `;

    console.log(fullName, {
        firstName,
        lastName,
        gender,
        age
    })
  }
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