function changeMe(arr) {
  // you can only write your code here!
    let people = {}
    for (i = 0; i < arr.length; i++){
        let person = {
            firstName: '',
            lastName: '',
            gender: '',
            age: 0,
        };
        arr[i].forEach((e,idx) => {
            if (idx === 0){
                person.firstName = e;  
            } else if (idx === 1){
                person.lastName = e
            } else if (idx === 2){
                person.gender = e
            } else {
                person.age = 2023 - e
            }
        });
        if (person.age === 0){
            person.age = "Invalid Birth Year"
        }
        let key = person.firstName + ' ' + person.lastName;
        people[key] = person; 
    }
    console.log(people)

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