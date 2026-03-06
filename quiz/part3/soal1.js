function changeMe(arr) {
    const christEvans = {
        firstName: `${arr[0][0]}`,
        lastName: `${arr[0][1]}`,
        gender: `${arr[0][2]}`,
        age: 2023-`${arr[0][3]}`
    }
    const RobertDowney = {
        firstName: `${arr[1][0]}`,
        lastName: `${arr[1][1]}`,
        gender: `${arr[1][2]}`,
        age: `Invalid Birth Year`
    }
    console.log(christEvans);
    console.log(RobertDowney);
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
  
  //changeMe([]); // ""