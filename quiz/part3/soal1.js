function changeMe(arr) {
  let peopleData = [];

  const currentYear = 2025;

  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];

    let age;
    if (!person[3] || person[3] > currentYear) {
      age = 'Invalid Birth Year';
    } else {
      age = currentYear - person[3];
    }

    let data = {
      firstName: person[0],
      lastName: person[1],
      gender: person[2],
      age: age
    };

    peopleData.push(data);

    console.log(`${i + 1}. ${person[0]} ${person[1]}:`);
    console.log(data);
  }

  return peopleData; // kalau kamu ingin menyimpan datanya juga
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