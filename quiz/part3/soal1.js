function changeMe(arr) {
  // you can only write your code here!
  if(arr.length === 0) {
    console.log('');
  };

  for(let i = 0; i < arr.length; i++) {
    let firstName = arr[i][0];
    let lastName = arr[i][1];
    let gender = arr[i][2];
    let birthYear = arr[i][3];
    let age;
    if(typeof birthYear !== 'number') {
        age = 'Invalid Birth Year'
    } else {
        age = 2026 - birthYear;
    };
    
    console.log(`${i + 1}. ${firstName} ${lastName}: `)
    console.log({firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age
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