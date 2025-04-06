function changeMe(arr) {
    if (arr.length === 0) {
        console.log("");
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        const firstName = person[0];
        const lastName = person[1];
        const gender = person[2];
        const birthYear = person[3];
        const currentYear = new Date().getFullYear();

        const age = birthYear ? currentYear - birthYear : "Invalid Birth Year";

        console.log(`${i + 1}. ${firstName} ${lastName}:`);
        console.log({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age
        });
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
//1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
//2 Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.
changeMe([]);