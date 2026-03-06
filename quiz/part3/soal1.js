// Soal 1
function changeMe(arr) {
    // you can only write your code here!
    if (arr.length === 0) return console.log("");
    for (let i = 0; i < arr.length; i++) {
        let umur;
        if (arr[i][3] == undefined) umur = "Invalid Birth Year";
        else umur = 2026 - Number(arr[i][3]);
        let person = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: umur
        };
        console.log(`${i + 1}. ${person.firstName} ${person.lastName}:`);
        console.log(person);

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