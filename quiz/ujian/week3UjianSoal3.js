function highestScore (students) {
    // Code disini

    let arrClass = {};
    for (let i = 0; i < students.length; i++) {
         if (arrClass.hasOwnProperty(students[i].class)) {
            if (arrClass[students[i].class].score < students[i].score) {
            let data = {
                name: students[i].name,
                 score: students[i].score
             }
            arrClass[students[i].class] = data;
            }
         } else {
             arrClass[students[i].class] = {};
             let data = {
                 name: students[i].name,
                 score: students[i].score
             }
             arrClass[students[i].class] = data;
         }
    }
    return arrClass;
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