function changeMe(arr) {
    // you can only write your code here!

    const profil = {
    }
    if(arr[0] == undefined){
        console.log('""');
    }
    for (let i = 0; i < arr.length; i++) {
        profil.firstName = arr[i][0];
        profil.lastName = arr[i][1];
        profil.gender = arr[i][2];
        profil.age = 2023 - arr[i][3];

        if(Number.isNaN(profil.age)){
            profil.age = "Invalid Birth Year";
        }
        console.log(profil);
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