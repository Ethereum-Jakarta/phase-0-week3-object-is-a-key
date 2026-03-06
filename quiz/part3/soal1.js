//## Soal 1
//```js
function changeMe(arr) {
    if (arr.length === 0) {
        return;
    }
    for(let i = 0 ; i < arr.length; i++){
        let person = {};
        personFirstName = arr[i][0] || null;
        personLastName = arr[i][1] || null;
        personGender = arr[i][2] || null;

        if(arr[i][3] === undefined){
            personAge = 'Invalid Birth Year }'
        } else {
            let currentYear = 2023;
            personAge = (currentYear - arr[i][3]) + (' } 2023 - 1982 = 41 kan yak wkwk ');
        }
        console.log(`${i+1} ${personFirstName} ${personLastName}:`);
        console.log(`${personFirstName + " " + personLastName}: { firstName: '${personFirstName}', \n lastName: '${personLastName}',\n gender: '${personGender}',\n age: ${personAge} `);
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