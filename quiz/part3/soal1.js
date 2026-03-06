function changeMe(arr) {
    // you can only write your code here!
    const currentYear = new Date().getFullYear();
    for(let i = 0; i < arr.length; i++) {    
        const [firstName, lastName, gender, age] = arr[i];
        parseInt(age);
        const birthYear = currentYear - age;
        console.log(` ${firstName} ${lastName} :`)
        console.log({
          firstName,
          lastName,
          gender,
          birthYear
      });
}
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
   // 1. Christ Evans:
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