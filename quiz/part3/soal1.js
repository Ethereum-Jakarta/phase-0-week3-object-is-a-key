function changeMe(arr) {
    var person = {}
    var fullName = null

    for (var i = 0; i < arr.length; i++){
        fullName = arr[i][0] + " " + arr[i][1]

        if (!person[fullName]) {
            person[fullName] = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: arr[i][3] ? new Date().getFullYear() - arr[i][3] : "Invalid Birth Year"
            }
        }
    }

    console.log(person)

    return person
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]);
// ""
