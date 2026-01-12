
function changeMe(arr) {
  // you can only write your code here!
  let output = {};
  for (let i = 0; i < arr.length;i++) {
    let identitas = {};
    identitas['firstName'] = arr[i][0];
    identitas['lastName'] = arr[i][1];
    identitas['gender'] = arr[i][2];
    identitas['age'] = 2026 - arr[i][3]; // sekarang tahun 2026 wkwkwkwk
    if (arr[i][3] === undefined) {
        identitas['age'] = 'invalid Birth Year';
    }
    output[`${arr[i][0]} ${arr[i][1]}`] = identitas;
  }
  console.log(output);
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