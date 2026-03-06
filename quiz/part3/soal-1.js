function changeMe(arr) {
    // you can only write your code here!
    if(arr.length === 0) return ""
    let content = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const fullName = `${element[0]} ${element[1]}`;
        const objPerson = {
            firstName: element[0],
            lastName: element[1],
            gender: element[2],
            age: element[3] ? new Date().getFullYear() - element[3] : 'Invalid Birth Year'
        }
        content += `${fullName}: {
            firstName: ${element[0]},
            lastName: ${element[1]},
            gender: ${element[2]},
            age: ${element[3] ? new Date().getFullYear() - element[3] : 'Invalid Birth Year'}    
        }\n`
    }
    console.log(content);
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