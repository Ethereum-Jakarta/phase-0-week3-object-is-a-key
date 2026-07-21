function changeMe(arr) {
    arr.forEach((data, index) => {
    let objek = {
        firstName: data[0],
        lastName: data[1],
        gender: data[2],
        age: (data[3] === undefined) ? 'invalid birth year' : 2026 - data[3]
    };
    console.log(`${index + 1}. ${data[0]} ${data[1]}:`);
    console.log(objek)  
    });
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