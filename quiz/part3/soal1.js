function changeMe(arr) {
    // you can only write your code here!
    let result = {};
    for (let array of arr){
        let data = {};
        let firstName = array[0];
        let lastName = array[1];
        let birthYear = array[3];
        data["firstName"] = firstName;
        data["lastName"] = lastName;
        data["gender"] = array[2];
        let age;
        if (birthYear === undefined){
            age = "Invalid Birth Year";
        } else {
            const now = new Date();
            age = now.getFullYear() - birthYear;
        }
        data["age"] = age;
        result[firstName + " " + lastName] = data;
    }

    console.log(result);

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