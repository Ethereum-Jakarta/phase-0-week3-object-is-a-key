

function changeMe(arr) {
    const currentYear = new Date().getFullYear();
    if (arr.length === 0) {

        return;
    }
    arr.forEach((person , index) => {
        const [firstName, lastName, gender, birthYear] = person;
        const age = birthYear ? currentYear - birthYear : 'Invalid Birth Year';

        const personData = {
            firstName,
            lastName,
            gender,
            age
    };
    console.log(`${index + 1}. ${firstName} ${lastName}:`);

    console.log(personData);
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

changeMe([]);