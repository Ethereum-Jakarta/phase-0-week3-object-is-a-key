function changeMe(arr) {
    // you can only write your code here!
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        let name = `${arr[i][0]} ${arr[i][1]}`
        if(!obj[name]){
            obj[name] = {}
        }
        obj[name]['firstName:'] = arr[i][0]
        obj[name]['lastName'] = arr[i][1]
        obj[name]['gender'] = arr[i][2]
        obj[name]['age'] = (2023 - arr[i][3]) || "Invalid Birth Year"
        
    }
    return obj
  }
  
  // TEST CASES
  console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  //intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.
  
  console.log(changeMe([])); // ""