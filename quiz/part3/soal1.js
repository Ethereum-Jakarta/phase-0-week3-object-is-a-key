function changeMe(arr) {
    // you can only write your code here!
    if(arr.length === 0) {
        console.log("")
    }

    for(let i= 0; i < arr.length; i++) {
        let char = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: "Invalid Birth Year", 
        };
        if(arr[i][3] !== undefined) {
            let currentYear = new Date().getFullYear();
            char.age = currentYear - arr[i][3];
        }
        console.log(`${i + 1}. ${char.firstName} ${char.lastName} : `);
        console.log(char);
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