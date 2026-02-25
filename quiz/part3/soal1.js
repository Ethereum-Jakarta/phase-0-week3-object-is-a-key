// JUJUR, KAGAK NGERTI BANG NIH MAU DIAPAIN, GA KEBAYANG OUTPUTNYA. INI ATAS REFERENSI AJA, MAAF KALO SALAH.
function changeMe(arr) {
    if (arr.length === 0) {
        console.log ("");
        return;
    }

    let currentyear = new Date().getFullYear();

    arr.forEach ((person, index) => {
        let personObj = {
            firstname: person[0],
            lastname: person[1],
            gender: person[2],
            age: person[3] ? currentyear - person [3] : "Invalid Birthday"
        };

        console.log(`${index + 1}. ${personObj.firstname} ${personObj.lastname}: `);
        console.log(personObj);
        
    });
  }
  
  // TEST CASES
  changeMe([[
    'Christ', 'Evans', 'Male', 1982], 
    ['Robert', 'Downey', 'Male']]
); // 1. Christ Evans:
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