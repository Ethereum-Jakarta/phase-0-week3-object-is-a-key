// ## Soal 1
// ```js
function changeMe(arr) {
  const tahunSekarang = new Date().getFullYear();

  for (let i = 0; i < arr.length; i++) {
    const dataOrang = arr[i];
    objekOrang = {};

    objekOrang.firstName = dataOrang[0];
    objekOrang.lastName = dataOrang[1];
    objekOrang.gender = dataOrang[2];

    if (dataOrang[3] !== undefined && dataOrang[3] < tahunSekarang) {
      objekOrang.age = tahunSekarang - dataOrang[3];
    } else {
      objekOrang.age = "Invalid Birth Year";
    }
    console.log(`${i + 1}. ${objekOrang.firstName} ${objekOrang.lastName}:`);
    console.log(objekOrang);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
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

changeMe([]); // ""
