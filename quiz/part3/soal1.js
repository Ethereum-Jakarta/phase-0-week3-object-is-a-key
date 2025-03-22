function changeMe(arr) {
    let tahun = 2025;

    for (let i = 1; i < arr.length; i++){
        let person = {
            firsName:  arr[i][0],
            lastName:  arr[i][1],
            gender:  arr[i][2],
            age:  arr[i][3] ? tahun - arr[i][3] : 'No age'
        };

        console.log(`${person.firsName} ${person.lastName}:`, person);
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