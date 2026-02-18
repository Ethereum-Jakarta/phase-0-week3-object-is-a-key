function changeMe(arr) {
  // you can only write your code here!

  for (let i = 0; i < arr.length; i++) {
    let data = {};
    for (let j = 0; j < arr[i].length; j++) {
      let age = "0";
      if (arr[i].length === 4) {
        age = 2026 - arr[i][j];
      } else if (arr[i].length === 3) {
        age = "Invalid Birth Year";
      }

      data[arr[i][0] + arr[i][1]] = {
        firstName : arr[i][0],
        lastName  : arr[i][1],
        gender    : arr[i][2],
        age
      }
    }
    //console.log(`${i + 1}. ${data.firstName} ${data.lastName}:`);console.log(data);
    console.log(data);
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

/*
let studentDatas = [['John', 'Doe'], ['Joe', 'Anna']]
let newStudentDatas = [];

for (let i = 0; i < studentDatas.length; i++) {
    let data = {
        firstName: studentDatas[i][0],
        lastName: studentDatas[i][1],
    }

    newStudentDatas.push(data)
}

console.log(newStudentDatas)*/
