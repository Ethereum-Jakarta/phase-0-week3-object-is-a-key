function changeMe(arr) {
    if (arr.length === 0) return '';

    const year = 2023;

    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let firstName = obj[0];
        let lastName = obj[1];
        let gender = obj[2];
        let born = obj[3];

        let birthDay = born ? year - born : 'Invalid Birth Year';

        console.log(`${i + 1}. ${firstName} ${lastName}:`);
        console.log({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: birthDay
        })
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