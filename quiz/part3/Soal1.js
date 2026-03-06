function changeMe(arr) {
  // you can only write your code here!
  let data= {}
  for(var i=0;i<arr.length;i++) {
  let sementara ={}
   sementara.firstName =arr[i][0]
   sementara.lastName =arr[i][1]
   sementara.gender =arr[i][2]
   sementara.age =2026-arr[i][3]
   if(arr[i][3] === undefined) {
     sementara.age = 'Invalid Birth Year'
   }
  data[arr[i][0]+' '+arr[i][1]] = sementara
    }
  console.log(data)
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