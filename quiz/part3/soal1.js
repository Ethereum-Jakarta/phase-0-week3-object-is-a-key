function changeMe(arr) {
    if (arr.length === 0) {
        return ("")
    } 

    let tahun = 2023

    for (let i = 0; i < arr.length; i++) {
        let [firstName, lastName, gender, birthyyear] = arr[i]
        let age = (birthyyear && birthyyear <= tahun) ? tahun - birthyyear : "Invalid Birth Year"

        let person = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age
    };

    console.log(`${firstName} ${lastName} {`);
    console.log(`  firstName: '${person.firstName}',`)
    console.log(`  lastName: '${person.lastName}',`)
    console.log(`  gender: '${person.gender}',`)
    console.log(`  age: ${typeof person.age === "number" ? person.age : "'" + person.age + "'"} }`)
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
