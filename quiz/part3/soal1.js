// Soal 1

/* ==== ALGORITHM =====
1. cek apakah array itu kosong atau tidak, jika ya return string kosong
2. Buat for loop untuk memformat seluruh elemen yang ada dalam array
3. buat variable fullName yang menyimpan nama full dari setiap nama yang ada dalam array
4. buat object bernama person object yang disi biodata berdasarkan elemen yang ada pada array
5. Cek apakah didalam array 2 dimensi yang ada apakah ada elemen yang tipe datanya number, jika ada kurangi numbernya ddengan 2023 dan masukan hasilnya kedalam object
6. kembalikan hasilnya didalam loop

*/
function changeMe(arr) {
  // you can only write your code here!
  if(arr.length === 0) {return ""};

  for(let i = 0; i < arr.length; i++) {
    let fullName = `${arr[i][0]} ${arr[i][1]}`;

    let personObj = {
    firstName: arr[i][0],
    lastName: arr[i][1],
    gender: arr[i][2]
    };

    if(typeof arr[i][3] === `number` && arr[i][3] <= 2023) {
      personObj.age = 2023 - arr[i][3];
    } else {
      personObj.age = `Invalid Birth Day`;
    }

    console.log(`${i + 1}. ${fullName}`);
    console.log(personObj);

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
