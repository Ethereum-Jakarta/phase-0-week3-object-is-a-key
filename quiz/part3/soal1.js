function changeMe(arr) {
   for (let i = 0; i < arr.length; i++) {
      const fullName = arr[i][0] + " " + arr[i][1];
      let data = { [fullName]: {} }; // pakai computed property
      
      const first = arr[i][0];
      const last = arr[i][1];
      const gen = arr[i][2];
      
      data[fullName].firstName = first;
      data[fullName].lastName = last;
      data[fullName].gender = gen;
      
      if (arr[i][3] == undefined) {
         data[fullName].age = "Invalid Birth Year";
      } else {
         const age = 2025 - arr[i][3];
         data[fullName].age = age;
      }
      
      console.log(data);
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