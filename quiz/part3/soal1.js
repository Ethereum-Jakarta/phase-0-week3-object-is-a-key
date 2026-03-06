function changeMe(arr) {
    // you can only write your code here!
    if (arr.length === 0) {
        console.log("");
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        var person = arr[i]; 
        var obj = {
            firstName: person[0],
            lastName: person[1],
            gender: person[2],
            age: person[3] !== undefined ? 2023 - person[3] : 'Invalid Birth Year'
        };
        console.log((i + 1) + ". " + person[0] + " " + person[1] + ":", obj);
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