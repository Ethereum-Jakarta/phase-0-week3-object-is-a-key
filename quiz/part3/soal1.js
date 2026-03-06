function changeMe(arr) {
    for(let i = 0; i < arr.length; i++){
        let orang = {
            firstName : arr[i][0],
            lastName : arr[i][1],
            gender : arr[i][2],
            age : arr[i][3]
        }
        if(!arr[i][3]) orang.age = 'Invalid Birth Year';
        else{orang.age = 2023 - orang.age}
        console.log(`${orang.firstName} ${orang.lastName} :`, orang)
    }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }