function changeMe(arr) {
    // you can only write your code here!
    if (arr.length == 0) {
        console.log("");
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let ident = {};
        ident.firstName = arr[i][0];
        ident.lastName = arr[i][1];
        ident.gender = arr[i][2];
        if (arr[i][3] > 0) {
            ident.age = 2023 - arr[i][3];
        } else {
            ident.age = 'Invalid Birth Year';
        }
        console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]}:`);
        console.log(ident);
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