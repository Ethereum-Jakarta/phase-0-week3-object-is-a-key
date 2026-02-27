function changeMe(arr) {
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    let fullName = arr[i][0] + arr[i][1];
    let newData = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      Gender: arr[i][2],
      age: 2024 - arr[i][3],
    };
    if (isNaN(newData.age) == true) {
      newData.age = "Invalid Birth Year";
    }
    hasil[fullName] = newData;
  }
  console.log(hasil);
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
  ["Reza", "Haffafi", "Male", 2006],
]); // 1. Christ Evans:
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
