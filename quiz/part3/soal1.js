function changeMe(arr) {
  // you can only write your code here!
    if (arr.length === 0) {
        console.log('');
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2];
        if (arr[i][3] > 2023 || isNaN(arr[i][3])) {
            obj.age = 'Invalid Birth Year';
        } else {
            obj.age = 2023 - arr[i][3];
        }
        console.log(`${i + 1}. ${obj.firstName} ${obj.lastName}:`, obj);
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