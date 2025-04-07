// ## Soal 1
// ```js
function changeMe(arr) {
  if (arr.length === 0) {
    console.log('');
    return;
  }
  
  const currentYear = new Date().getFullYear();
  
  for (let i = 0; i < arr.length; i++) {
    const [firstName, lastName, gender, birthYear] = arr[i];
    const age = birthYear ? currentYear - birthYear : 'Invalid Birth Year';

    const person = {
      firstName,
      lastName, 
      gender,
      age
    };

    console.log(`${i + 1}. ${firstName} ${lastName}:`, person );
  }
}

// // TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// // Christ Evans: { firstName: 'Christ',
// //   lastName: 'Evans',
// //   gender: 'Male',
// //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// // Robert Downey: { firstName: 'Robert',
// //   lastName: 'Downey',
// //   gender: 'Male',
// //   age: 'Invalid Birth Year' }

// //intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.

changeMe([]); // ""
// ```
