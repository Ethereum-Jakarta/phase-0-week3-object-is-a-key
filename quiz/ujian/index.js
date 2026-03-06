console.log("task 1")
function deepSum (arr) {
    if (!Array.isArray(arr)) return 0 ;
    return arr.reduce((sum, item) => sum + (Array.isArray(item) ? deepSum(item) : item), 0);
    }
    
    //TEST CASE
    console.log(deepSum([
      [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
      ],
      [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
      ],
      [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
      ]
    ])); // 316
    
    console.log(deepSum([
      [
        [20, 10],
        [15],
        [1, 1]
      ],
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
      ],
      [
        [3, 5, 1],
        [1, 5, 3],
        [1]
      ],
      [
        [2]
      ]
    ])); // 156
    
    console.log(deepSum([])); // No number
    console.log("task 2");
    
    function naikAngkot(arrPenumpang) {
        rute = ['A', 'B', 'C', 'D', 'E', 'F'];
        return arrPenumpang.map(([arrPenumpang,naikDari,tujuan]) => ({
            arrPenumpang,
            naikDari,
            tujuan,
            bayar: (rute.indexOf(tujuan) - rute.indexOf(naikDari)) * 2000
        }))
      }
      console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
    // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
    //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
    
    console.log(naikAngkot([])); //[]
    console.log("task 3")
    
    function highestScore(students) {
        let result = {};
        students.forEach(student => {
            let { class: className, name, score } = student;
            
            
            if (!result[className] || score > result[className].score) {
                result[className] = { name, score };
            }
        });
    
        return result;
    }
      // TEST CASE
    console.log(highestScore([
        {
          name: 'Dimitri',
          score: 90,
          class: 'foxes'
        },
        {
          name: 'Alexei',
          score: 85,
          class: 'wolves'
        },
        {
          name: 'Sergei',
          score: 74,
          class: 'foxes'
        },
        {
          name: 'Anastasia',
          score: 78,
          class: 'wolves'
        }
      ]));
      
      // {
      //   foxes: { name: 'Dimitri', score: 90 },
      //   wolves: { name: 'Alexei', score: 85 }
      // }
      
      
      console.log(highestScore([
        {
          name: 'Alexander',
          score: 100,
          class: 'foxes'
        },
        {
          name: 'Alisa',
          score: 76,
          class: 'wolves'
        },
        {
          name: 'Vladimir',
          score: 92,
          class: 'foxes'
        },
        {
          name: 'Albert',
          score: 71,
          class: 'wolves'
        },
        {
          name: 'Viktor',
          score: 80,
          class: 'tigers'
        }
      ]));
      
      // {
      //   foxes: { name: 'Alexander', score: 100 },
      //   wolves: { name: 'Alisa', score: 76 },
      //   tigers: { name: 'Viktor', score: 80 }
      // }
      
      
      console.log(highestScore([])); //{}

      console.log("tugas 4")
    
      
  function graduates (students) {
    let result = {};
    students.forEach(student => {
        let { class: className, name, score } = student;
        if (score > 75 ){
            if (!result[className]) {
                result[className] = [];
                }
                result[className].push({name,score});
        }
    })
    return result;
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}