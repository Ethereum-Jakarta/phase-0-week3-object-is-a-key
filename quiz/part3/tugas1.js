// Soal 1

function changeMe(arr) {
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    let firstName = person[0];
    let lastName = person[1];
    let gender = person[2];
    let birthYear = person[3];

    if (birthYear !== undefined && birthYear <= 2025) {
      age = 2025 - birthYear;
    } else {
      age = "Invalid Birth Year";
    }

    let result = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age,
    };
    console.log(`${i + 1}. ${firstName} ${lastName}:`);
    console.log(result);

    if (arr.length === 0) {
      console.log("");
    }
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
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

changeMe([]);
