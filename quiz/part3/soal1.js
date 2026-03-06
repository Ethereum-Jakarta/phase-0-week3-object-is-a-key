function changeMe(arr) {
    let tahun = 2023

    for (let i = 0; i < arr.length; i++) {
        let [firstName, lastName, gender, tahunLahir] = arr[i]
        let age = (tahunLahir && tahunLahir <= tahun) ? tahun - tahunLahir : "Invalid Birth Year"

        let person = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age
  };
      console.log(`${firstName} ${lastName} {`)
      console.log(` firstName: '${person.firstName}',`)
      console.log(` lastName: '${person.lastName}',`)
      console.log(` gender: '${person.gender}',`)
      console.log(` age: ${typeof person.age === "number" ? person.age : "'" + person.age + "'"} }`)
    }
}

  
  // TEST CASES
 changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  
  
  changeMe([]);