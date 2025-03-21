function changeMe(arr) {
  // you can only write your code here!
  const obj = {}
  const obj2 = {}

  if (!arr.length) {
    console.log("");
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    obj.firstName = `${arr[i][0]}`
    obj.lastName = `${arr[i][1]}`
    obj.gender = `${arr[i][2]}`
    obj.age = 2025 - arr[i][3]

    if (isNaN(obj.age)) {
      obj.age = "Invalid Birth Year";
    }
    obj2[arr[i][0] + " " + arr[i][1]] = obj;
  }

  for (const key in obj2) {
    console.log(`${key}:`);
    console.log(obj2[key]);
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
