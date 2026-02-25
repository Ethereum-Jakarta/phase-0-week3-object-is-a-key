function changeMe(arr) {
    // you can only write your code here!
    for (let i = 0; i < arr.length; i++) {
      let aktor = arr[i];
      let firstName = aktor[0];
      let secondName = aktor[1];
      let gender = aktor[2];
      let birthYear = aktor[3];

    if (typeof birthYear !== "number"){
      birthYear = 'Invalid Birth Year';
    }


      console.log(`${i + 1}. ${firstName} ${secondName} 
        {first name: ${firstName}, 
        second name: ${secondName}, 
        gender: ${gender},
        lahir: ${birthYear}}`
        )
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