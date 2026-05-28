
function changeMe(arr) {
  // you can only write your code here!
  if (arr.length === 0) {
    console.log("")
  }
  for(i in arr) {
    let obj = {};
    obj['firstName'] = arr[i][0];
    obj['lastName'] = arr[i][1];
    obj['gender'] = arr[i][2];
    if (arr[i][3] !== undefined) {
        obj['age'] = 2026 - arr[i][3]; //sekarang udah lebih tua wkwkwk, karena ini 2026 wkwkwk 
    } else {
        obj['age'] = "Invalid Birth Year";
    }
    console.log(`${arr[i][0]} ${arr[i][1]} : ${JSON.stringify(obj)}`); // harsu pake ${JSON.stringfy(nama objek nya)}
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