function changeMe(arr) {
    // you can only write your code here!
    let tahun = new Date();
    tahun = tahun.getFullYear()
    for (let i = 0; i < arr.length; i++) {
        let Obj = {
            FirstName: arr[i][0],
            LastName: arr[i][1],
            gender: arr[i][2],
            age: typeof arr[i][3] === 'number' ? tahun - arr[i][3] : 'invalid Birth Year',
        }
        console.log(`${i + 1}. ${Obj.FirstName} ${Obj.LastName}:`, Obj);
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

changeMe([]);
// ""
