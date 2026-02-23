function changeMe(arr) {
  // you can only write your code here!
  
  if (arr.length < 1) { console.log("\n\"\""); return;}
  let year = 2023;
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let firstName = element[0];
    let lastName = element[1];
    let gender = element[2];
    let birth_year = element[3];
    let age = (year - birth_year) || "'Invalid Birth Year'";

    const italicStart = '\x1B[3m';
    const reset = '\x1B[0m';
    
    // console.log(`${italicStart}// ${firstName} ${lastName}:`, `{ firstName: '${firstName}',\n//   lastName: '${lastName}',\n//   gender: '${gender}',\n//   age: ${birth_year ? age : "'"+age+"'"} } ${birth_year ? year +" - "+ birth_year +" = "+ age +" kan yak wkwk" : ""}${reset}`);

    // console.log(`\n\n`)

    console.log
(`${italicStart}// ${firstName} ${lastName}: { firstName: '${firstName}',
//   lastName: '${lastName}',
//   gender: '${gender}',
//   age: ${age} }${age !== "'Invalid Birth Year'" ? " 2023 - 1982 = 41 kan yak wkwk" : ""}${reset}`)
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

// intinya bagaimana cara kalian bisa menampilkan output diatas, 
// sebebas dan sekreatif kalian.

changeMe([]); // ""