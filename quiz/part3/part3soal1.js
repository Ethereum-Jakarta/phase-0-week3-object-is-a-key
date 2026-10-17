
function changeMe(arr) {
  // you can only write your code here!
  let Obj = {};
  let name;
  for(person of arr){
    name = `${person[0]} ${person[1]}`;
    Obj[name] = {}; 
    Obj[name].firstName = person[0];
    Obj[name].lastName = person[1];
    Obj[name].gender = person[2];
    if(!person[2]){
        Obj[name].age = 2026 - Number(person[3]);
    }
    else{
        Obj[name].age = 'Invalid Birth Year';
    }
  }
  return Obj;
}

// TEST CASES
let test = changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

console.log(test);

//intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.
